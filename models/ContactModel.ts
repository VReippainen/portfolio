import { BaseModel } from './BaseModel'
import { ContactDetailModel } from './ContactDetailModel'
import { Entry } from 'contentful'

export interface ContactModel extends BaseModel {
  contactLinks: Entry<ContactDetailModel>[]
}
