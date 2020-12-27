import { ReactElement } from 'react'
import { CareerSection } from '../components/sections/CareerSection'
import { EducationSection } from '../components/sections/EducationSection'
import { Hero } from '../components/sections/Hero'

interface SectionMap {
  [key: string]: (props: unknown) => ReactElement
}

const sectionMap: SectionMap = {
  hero: Hero,
  section: EducationSection,
  careerSection: CareerSection,
}

export function getSectionById(id: string): (props: unknown) => ReactElement {
  return sectionMap[id]
}
