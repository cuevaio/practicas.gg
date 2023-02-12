export const revalidate =  43200

import { use } from "react"
import { getLongDate, getShortDate } from "@/utils"
import { JobsClient } from "@/xata/clients"

import JobOffer from "@/components/JobOffer"
import MorePages from "@/components/MorePages"

const getJobOffersPage = async () => {
  return await JobsClient.db.JobOffer.sort("publishedAt", "desc").getPaginated({
    pagination: {
      size: 6,
    },
  })
}

const LandingPage = () => {
  const { meta, records } = use(getJobOffersPage())

  console.log(records[0])
  return (
    <div className="container mt-10">
      <h1 className="text-center mb-4 text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
        <span className="text-gray-400">Welcome to </span>civil.jobs
      </h1>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-8 mt-12">
        {records?.map((jobOffer) => (
          <JobOffer
            key={jobOffer.id}
            {...jobOffer}
            publishedAt={{
              short: getShortDate(jobOffer.publishedAt),
              long: getLongDate(jobOffer.publishedAt),
            }}
          />
        ))}
      </div>

      <MorePages meta={meta} />
    </div>
  )
}

export default LandingPage
