export function formatDateString(dateString: string) {
  const timestamp = parseInt(dateString, 10) // преобразуем строку в число
  const dateObject = new Date(timestamp)

  const day = dateObject.getDate()
  const month = dateObject.getMonth() + 1 // добавляем 1, так как месяцы начинаются с 0
  const year = dateObject.getFullYear()

  const formattedDate = `${day
    .toString()
    .padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`

  return formattedDate
}
