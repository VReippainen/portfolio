import { describe, expect, it } from 'vitest'
import { getAge } from './getAge'

describe('getAge', () => {
  it('should return the correct age', () => {
    const dateOfBirth = new Date(2000, 0, 1) // January 1, 2000
    const currentYear = new Date().getFullYear()
    expect(getAge(dateOfBirth)).toBe(currentYear - 2000)
  })
  it('should return the correct age for a past date', () => {
    const dateOfBirth = new Date(1990, 5, 15) // June 15, 1990
    const currentYear = new Date().getFullYear()
    expect(getAge(dateOfBirth)).toBe(currentYear - 1990)
  })

  it('should return 0 for a birth date in the current year', () => {
    const dateOfBirth = new Date(new Date().getFullYear(), 0, 1) // January 1 of the current year
    expect(getAge(dateOfBirth)).toBe(0)
  })
})
