// Generated using Claude AI
export function getAge(dateOfBirth: Date): number {
  // Calculate the difference in milliseconds
  const today = new Date()
  const diffTime = Math.abs(today.getTime() - dateOfBirth.getTime())

  // Convert milliseconds to years
  // Using 365.25 days to account for leap years
  const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25)

  // Round to two decimal places
  return Math.floor(diffYears)
}
