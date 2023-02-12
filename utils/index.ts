export const getShortDate = (date: Date) => {
  const parsedDate = new Date(date)
  const day = parsedDate.getDate()
  const month = parsedDate.getMonth() + 1

  return `${day}/${month}`
}

export const getLongDate = (date: Date) => {
  const parsedDate = new Date(date)
  return parsedDate.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
