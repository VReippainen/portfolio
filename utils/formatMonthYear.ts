export function formatMonthYear(date: Date): string {
  return `${date.getMonth() + 1}/${date.getFullYear()}`
}
