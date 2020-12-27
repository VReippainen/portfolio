import { BaseSectionModel } from './BaseSectionModel'

export interface HeroModel extends BaseSectionModel {
  title: string
  paragraph: string
  height: number
}
