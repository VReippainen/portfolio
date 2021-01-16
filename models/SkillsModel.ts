import { Entry } from 'contentful'
import { BaseModel } from './BaseModel'
import { SkillModel } from './SkillModel'

export interface SkillsModel extends BaseModel {
  title: string
  skills: Entry<SkillModel>[]
}
