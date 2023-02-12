"use client"

import { getLongDate, getShortDate } from "@/utils"
import useSWRInfinite from "swr/infinite"

import JobOffer from "@/components/JobOffer"
import { Button } from "@/components/ui/button"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const MorePages = ({ meta }) => {
  const first_cursor = meta.page.cursor

  const getKey = (pageIndex, previousPageData) => {
    // reached the end
    if (previousPageData && !previousPageData.meta.page.more) return null

    // first page, we don't have `previousPageData`
    if (pageIndex === 0) return `/api/joboffers?after=${first_cursor}`

    // add the cursor to the API endpoint
    return `/api/joboffers?after=${previousPageData.meta.page.cursor}`
  }

  const { data, size, setSize } = useSWRInfinite(getKey, fetcher)

  const hasMore = data && data[data.length - 1].meta.page.more

  const records =
    data?.reduce((acc, val) => {
      return acc.concat(val.records)
    }, []) ?? []

  return (
    <>
      {records.length > 0 && (
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
      )}
      {hasMore && (
        <div className="mb-16 flex justify-center">
          <Button type="button" onClick={() => setSize(size + 1)}>
            Cargar más
          </Button>
        </div>
      )}
    </>
  )
}

export default MorePages
