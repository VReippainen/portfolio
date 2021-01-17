import { Entry } from 'contentful'
import { MetaModel } from './MetaModel'
import { PageModel } from './PageModel'

export interface WebSiteModel {
  id: string
  pages: Entry<PageModel>[]
  meta: Entry<MetaModel>
  url: string
}
