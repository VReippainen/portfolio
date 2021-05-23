import { BaseModel } from './BaseModel'
import { Entry } from 'contentful'
import { ImageModel } from './ImageModel'

type ContactLinkType = 'email' | 'github' | 'email'

export interface ContactDetailModel extends BaseModel {
  link: string
  linkType: ContactLinkType
  icon: Entry<ImageModel>
}
