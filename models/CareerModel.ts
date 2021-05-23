import { BaseModel } from './BaseModel'
import { Entry } from 'contentful'
import { LinkModel } from './LinkModel'

export interface CareerModel extends BaseModel {
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
