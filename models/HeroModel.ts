import { BaseModel } from './BaseModel'
import { Entry } from 'contentful'
import { ImageModel } from './ImageModel'

export interface HeroModel extends BaseModel {
  title: string
  paragraph: string
  backgroundImage: Entry<ImageModel>
}
