import { BaseModel } from './BaseModel'
import { Entry } from 'contentful'

export interface PageModel {
  id: string
  name: string
  sections: Entry<BaseModel>[]
}
