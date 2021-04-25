import { Entry } from 'contentful'
import { BaseModel } from './BaseModel'
import { ContactDetailModel } from './ContactDetailModel'

export interface ContactModel extends BaseModel {
  contactLinks: Entry<ContactDetailModel>[]
}
