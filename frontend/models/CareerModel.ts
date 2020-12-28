import { BaseSectionModel } from './BaseSectionModel'

export interface CareerModel extends BaseSectionModel {
  id: string
  title: string
  height: number
  startDate: string
  endDate?: string
  current: boolean
  description: string
  technologies: string[]
  company: string
}
