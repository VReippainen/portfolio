import { describe, expect, it } from 'vitest'
import { formatMonthYear } from './formatMonthYear'

describe('formatMonthYear', () => {
  it('should format the month and year correctly for a given date', () => {
    const date = new Date(2000, 0, 1) // January 1, 2000
    expect(formatMonthYear(date)).toBe('1/2000')
  })

  it('should format the month and year correctly for a past date', () => {
    const date = new Date(1990, 5, 15) // June 15, 1990
    expect(formatMonthYear(date)).toBe('6/1990')
  })

  it('should format the month and year correctly for the current date', () => {
    const date = new Date()
    const currentMonthYear = `${date.getMonth() + 1}/${date.getFullYear()}`
    expect(formatMonthYear(date)).toBe(currentMonthYear)
  })
})
