import { describe, expect, it } from 'vitest'
import { formatYear } from './formatYear'

describe('formatYear', () => {
  it('should format the year correctly for a given date', () => {
    const date = new Date(2000, 0, 1) // January 1, 2000
    expect(formatYear(date)).toBe('2000')
  })

  it('should format the year correctly for a past date', () => {
    const date = new Date(1990, 5, 15) // June 15, 1990
    expect(formatYear(date)).toBe('1990')
  })

  it('should format the year correctly for the current date', () => {
    const date = new Date()
    const currentYear = date.getFullYear().toString()
    expect(formatYear(date)).toBe(currentYear)
  })
})
