import { Entry } from 'contentful'
import { PageModel } from './PageModel'

export interface WebSiteModel {
  id: string
  pages: Entry<PageModel>[]
}
