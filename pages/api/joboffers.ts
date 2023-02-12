import { JobsClient } from "@/xata/clients"

const handler = async (req, res) => {
  const { after } = req.query
  const page = await JobsClient.db.JobOffer.sort(
    "publishedAt",
    "desc"
  ).getPaginated({
    pagination: {
      size: 6,
      after,
    },
  })
  res.status(200).json(page)
}

export default handler
