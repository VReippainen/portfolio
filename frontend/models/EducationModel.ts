import { BaseSectionModel } from './BaseSectionModel'

export interface EducationModel extends BaseSectionModel {
  name: string
  major: string
  gpa: number
  height: number
  startDate: string
  endDate?: string
  onGoing: boolean
  minors?: string[]
  creditsDone: number
  creditsTotal: number
  faculty: string
  university: string
}
