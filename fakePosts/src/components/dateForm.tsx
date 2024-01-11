export function formatDateString(dateString: string) {
  const timestamp = parseInt(dateString, 10)
  const dateObject = new Date(timestamp)

  const day = dateObject.getDate()
  const month = dateObject.getMonth() + 1
  const year = dateObject.getFullYear()

  const formattedDate = `${day
    .toString()
    .padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`

  return formattedDate
}
