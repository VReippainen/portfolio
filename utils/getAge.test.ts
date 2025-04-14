import { describe, expect, it, beforeEach, afterEach, vi } from 'vitest'
import { getAge } from './getAge'

describe('getAge', () => {
  beforeEach(() => {
    // Mock current date to 2024-03-15
    vi.useFakeTimers()
    vi.setSystemTime(new Date(2024, 2, 15))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should return the correct age', () => {
    const dateOfBirth = new Date(2000, 0, 1) // January 1, 2000
    expect(getAge(dateOfBirth)).toBe(24)
  })

  it('should return the correct age for a past date', () => {
    const dateOfBirth = new Date(1990, 5, 15) // June 15, 1990
    expect(getAge(dateOfBirth)).toBe(33)
  })

  it('should handle birthdays that have not occurred this year', () => {
    const dateOfBirth = new Date(1990, 8, 15) // September 15, 1990
    expect(getAge(dateOfBirth)).toBe(33)
  })

  it('should return 0 for a birth date in the current year', () => {
    const dateOfBirth = new Date(2024, 0, 1) // January 1 of the current year
    expect(getAge(dateOfBirth)).toBe(0)
  })
})
