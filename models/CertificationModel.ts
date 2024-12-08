import { BaseModel } from './BaseModel'
import { Entry } from 'contentful'
import { LinkModel } from './LinkModel'

export interface CertificationModel extends BaseModel {
  title: string
  height: number
  date: string
  description?: string
  company: string
  link?: Entry<LinkModel>
  hide?: boolean
}
