import format from 'date-fns/format'

export function formatMonthYear(date: Date): string {
  return format(date, 'M/Y')
}

export function formatYear(date: Date): string {
  return format(date, 'Y')
}
