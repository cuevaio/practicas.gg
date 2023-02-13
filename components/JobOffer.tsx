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
import AlertFiltrado from "./AlertFiltrado"

const JobOfferCardContent = ({
  title,
  company,
  location,
  publishedAt,
  body,
  salary,
}) => (
  <article className="dark:text-zinc-500 cursor-pointer rounded-lg border dark:border-zinc-800 hover:dark:border-zinc-700 p-4 pb-12 relative h-full text-left">
    <h2 className="dark:text-zinc-300 font-bold">{title}</h2>
    <div className="dark:text-zinc-400 flex justify-between my-2">
      <span className="text-sm italic">{company}</span>
      <span className="text-sm font-bold text-right">{location}</span>
    </div>
    <p className="whitespace-pre-line">{body.slice(0, 120)}...</p>
    {salary && (
      <span className="font-bold text-transparent text-sm bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 absolute bottom-4 left-4">
        S/ {salary}
      </span>
    )}
    <span className="font-bold text-sm absolute bottom-4 right-4">
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
  body,
}) => (
  <DialogContent className="sm:max-w-[840px] h-full sm:max-h-[520px]">
    <DialogHeader>
      <DialogTitle>{title}</DialogTitle>
      <DialogDescription>
        <div className="dark:text-zinc-400 flex justify-between">
          <span className="text-sm italic">{company}</span>
          <span className="text-sm font-bold text-right">{location}</span>
        </div>
      </DialogDescription>
    </DialogHeader>

    <p className="text-zinc-300 max-h-[520px] overflow-y-auto whitespace-pre-line">
      {body}
    </p>

    <div className="list-disc list-inside space-y-2 mt-4 mb-2 cursor-pointer rounded-full py-1.5 px-4 text-xs font-bold bg-rose-600 hover:bg-opacity-70 bg-opacity-100 space-x-4 hidden" />
    <span className="font-bold text-sm flex justify-end mt-4">
      {publishedAt.long}
    </span>
    <DialogFooter>
      <AlertFiltrado id={id} />
      <Button type="button" size="sm">
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
