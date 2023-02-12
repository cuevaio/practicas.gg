"use client"

import React from "react"
import { AlertTriangle } from "lucide-react"
import useSWR from "swr"

import { Button } from "@/components/ui/button"

const AlertFiltrado = ({ id }) => {
  const { data, mutate, isLoading } = useSWR(`/api/alerts?id=${id}`)
  const { alert_count, currentUserAlerted } = data || {
    alert_count: 0,
    currentUserAlerted: false,
  }

  const handleClick = async () => {
    const res = await fetch(`/api/alerts?id=${id}`, {
      method: "POST",
    })
    const data = await res.json()
    mutate(data)
  }

  return (
    <Button
      size="sm"
      disabled={isLoading}
      variant="ghost"
      onClick={handleClick}
      className="dark:text-zinc-300 flex items-center"
    >
      <AlertTriangle className="mr-2 h-4 w-4" />
      <span className="text-xs font-medium">
        {currentUserAlerted
          ? "Lo alertaste como filtrado"
          : "Alertar como filtrado"}
        {alert_count > 0 && `(${alert_count}/5)`}
      </span>
    </Button>
  )
}

export default AlertFiltrado
