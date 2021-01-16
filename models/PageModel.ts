import { Entry } from 'contentful'
import { BaseModel } from './BaseModel'

export interface PageModel {
  id: string
  name: string
  sections: Entry<BaseModel>[]
}
