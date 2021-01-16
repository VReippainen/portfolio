import { Entry } from 'contentful'
import { BaseModel } from './BaseModel'
import { ImageModel } from './ImageModel'

export interface HeroModel extends BaseModel {
  title: string
  paragraph: string
  backgroundImage: Entry<ImageModel>
}
