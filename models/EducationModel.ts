import { BaseModel } from './BaseModel'

export interface EducationModel extends BaseModel {
  major: string
  name: string
  gpa: number
  height: number
  startDate: string
  endDate?: string
  ongoing: boolean
  minors?: string[]
  creditsDone: number
  creditsTotal: number
  faculty: string
  university: string
}
