import { Entry } from 'contentful'
import { BaseSectionModel } from './BaseSectionModel'

export interface PageModel {
  id: string
  name: string
  sections: Entry<BaseSectionModel>[]
}
