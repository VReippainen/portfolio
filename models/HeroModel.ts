import { Entry } from 'contentful'
import { BaseSectionModel } from './BaseSectionModel'
import { ImageModel } from './ImageModel'

export interface HeroModel extends BaseSectionModel {
  title: string
  paragraph: string
  backgroundImage: Entry<ImageModel>
}
