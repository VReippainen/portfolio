import { BaseModel } from './BaseModel'
import { Entry } from 'contentful'
import { SkillModel } from './SkillModel'

export interface SkillsModel extends BaseModel {
  title: string
  skills: Entry<SkillModel>[]
}
