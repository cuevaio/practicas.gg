import { createHash } from "crypto"
import type { NextApiRequest, NextApiResponse } from "next"
import { JobsClient } from "@/xata/clients"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const ipAddress =
      req.headers["x-forwarded-for"] ||
      // Fallback for localhost or non Vercel deployments
      "0.0.0.0"

    const id = req.query.id as string

    const currentUserId =
      // Since a users IP address is part of the sessionId in our database, we
      // hash it to protect their privacy. By combining it with a salt, we get
      // get a unique id we can refer to, but we won't know what their ip
      // address was.
      createHash("md5")
        .update(ipAddress + process.env.IP_ADDRESS_SALT!, "utf8")
        .digest("hex")

    // Identify a specific users interactions with a specific post
    const sessionId = id + "___" + currentUserId

    switch (req.method) {
      case "GET": {
        const [post, user] = await Promise.all([
          JobsClient.db.JobOffer.read(id),
          JobsClient.db.Session.read(sessionId),
        ])

        res.json({
          alert_count: post?.alert_count || 0,
          currentUserAlerted: !!user,
        })

        break
      }

      case "POST": {
        const session0 = await JobsClient.db.Session.read(sessionId)

        console.log({ session0 })

        if (session0) {
          await JobsClient.db.Session.delete(sessionId)
        } else {
          await JobsClient.db.Session.create({ id: sessionId })
        }

        const delta = session0 ? -1 : 1

        const post0 = await JobsClient.db.JobOffer.read(id)

        const post1 = await JobsClient.db.JobOffer.update(id, {
          alert_count: post0.alert_count + delta,
        })

        if (post1.alert_count >= 5) {
          await JobsClient.db.JobOffer.delete(id)
          await JobsClient.db.AlertedJobsOffers.create({ id })
        }

        res.json({
          alert_count: post1.alert_count,
          currentUserAlerted: !session0,
        })

        break
      }

      default: {
        res.setHeader("Allow", ["GET", "POST"])
        res.status(405).send("Method Not Allowed")
      }
    }
  } catch (err: any) {
    console.error(err.message)

    res.status(500).json({
      statusCode: 500,
      message: err.message,
    })
  }
}

export default handler
