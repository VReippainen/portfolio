import { Entry } from 'contentful'
import { BaseModel } from './BaseModel'
import { ImageModel } from './ImageModel'

export interface AboutMeModel extends BaseModel {
  title: string
  description: string
  dateOfBirth: Date
  image: Entry<ImageModel>
  location: string
  name: string
}
