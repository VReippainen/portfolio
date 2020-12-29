import { Entry } from 'contentful'
import { BaseSectionModel } from './BaseSectionModel'
import { LinkModel } from './LinkModel'

export interface CareerModel extends BaseSectionModel {
  id: string
  title: string
  height: number
  startDate: string
  endDate?: string
  current: boolean
  description?: string
  technologies?: string[]
  company: string
  link?: Entry<LinkModel>
  hide?: boolean
}
