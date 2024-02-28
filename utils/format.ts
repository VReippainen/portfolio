import { differenceInYears } from 'date-fns/differenceInYears'
import { format } from 'date-fns/format'

export function formatMonthYear(date: Date): string {
  return format(date, 'M/y')
}

export function formatYear(date: Date): string {
  return format(date, 'y')
}

export function getAge(dateOfBirth: Date): number {
  return differenceInYears(new Date(), dateOfBirth)
}
