import { Entry } from 'contentful'
import { SectionModel } from './SectionModel'

export interface PageModel {
  id: string
  name: string
  sections: Entry<SectionModel>[]
}
