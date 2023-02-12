import { use } from "react"
import { getLongDate, getShortDate } from "@/utils"
import { JobsClient } from "@/xata/clients"
import Balancer from "react-wrap-balancer"

import { siteConfig } from "@/config/site"
import JobOffer from "@/components/JobOffer"
import MorePages from "@/components/MorePages"
import { Icons } from "@/components/icons"

export const revalidate = 300

const getJobOffersPage = async () => {
  return await JobsClient.db.JobOffer.sort("publishedAt", "desc").getPaginated({
    pagination: {
      size: 6,
    },
  })
}

const LandingPage = () => {
  const { meta, records } = use(getJobOffersPage())
  return (
    <div className="container mt-10">
      <h1 className="text-center mb-4 text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
        <span className="text-gray-400">Bienvenido a </span>
        {siteConfig.name}
      </h1>
      <div className="flex justify-between items-center dark:text-zinc-500">
        <Balancer>{siteConfig.description}</Balancer>
        <a target="_blank" rel="noreferrer" href={siteConfig.links.github}>
          <Icons.gitHub className="w-5 h-5 mr-2 fill-current" />
        </a>
      </div>
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
