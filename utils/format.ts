import differenceInYears from 'date-fns/differenceInYears'
import format from 'date-fns/format'

export function formatMonthYear(date: Date): string {
  return format(date, 'M/Y')
}

export function formatYear(date: Date): string {
  return format(date, 'Y')
}

export function getAge(dateOfBirth: Date): number {
  return differenceInYears(new Date(), dateOfBirth)
}
