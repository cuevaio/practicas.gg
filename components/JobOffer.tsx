"use client"

import React from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const JobOfferCardContent = ({
  title,
  company,
  location,
  publishedAt,
  detail,
}) => (
  <article className="dark:text-zinc-500 cursor-pointer rounded-lg border dark:border-zinc-800 hover:dark:border-zinc-700 p-4 pb-12 relative h-full text-left">
    <h2 className="dark:text-zinc-300 font-bold">{title}</h2>
    <div className="dark:text-zinc-400 flex justify-between my-2">
      <span className="text-sm italic">{company}</span>
      <span className="text-sm font-bold text-right">{location}</span>
    </div>
    <p className="text-sm my-2">{detail.slice(0, 120)}</p>
    <span className="font-bold text-sm absolute bottom-2 right-2">
      {publishedAt.short}
    </span>
  </article>
)

const JobOfferDialogContent = ({
  id,
  title,
  company,
  location,
  publishedAt,
  detailHTML,
}) => (
  <DialogContent className="sm:max-w-[840px] h-full sm:max-h-[520px]">
    <DialogHeader>
      <DialogTitle>{title}</DialogTitle>
      <DialogDescription>
        <div className="dark:text-zinc-400 flex justify-between">
          <span className="text-sm italic">{company}</span>
          <span className="text-sm font-bold flex justify-end">{location}</span>
        </div>
      </DialogDescription>
    </DialogHeader>
    <div dangerouslySetInnerHTML={{ __html: detailHTML }} />
    <div className="sm:h-[280px] h-[520px] overflow-y-auto list-disc list-inside space-y-2 mt-4 mb-2 cursor-pointer rounded-full py-1.5 px-4 text-xs font-bold bg-rose-600 hover:bg-opacity-70 bg-opacity-100 space-x-4 hidden" />
    <div className="hidden py-4 font-bold text-lg text-white "></div>
    <div className="hidden text-zinc-700"></div>
    <div className="hidden text-zinc-400"></div>
    <span className="font-bold text-sm flex justify-end mt-4">
      {publishedAt.long}
    </span>
    <DialogFooter>
      <Button type="button">
        <a
          href={`https://pe.computrabajo.com/trabajo-de-practicas-ingenieria-civil#${id}`}
          target="_blank"
          rel="noreferrer"
        >
          Postular
        </a>
      </Button>
    </DialogFooter>
  </DialogContent>
)

const JobOffer = (props) => {
  const title = React.useMemo(
    () => props.title.charAt(0).toUpperCase() + props.title.slice(1),
    []
  )

  return (
    <Dialog>
      <DialogTrigger>
        <JobOfferCardContent {...props} title={title} />
      </DialogTrigger>
      <JobOfferDialogContent {...props} title={title} />
    </Dialog>
  )
}

export default JobOffer
