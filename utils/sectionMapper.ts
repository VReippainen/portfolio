import { ReactElement } from 'react'
import { CareerPage } from '../components/pages/CareerPage'
import { EducationPage } from '../components/pages/EducationPage'
import { HomePage, PageProps } from '../components/pages/HomePage'
import { CareerHeader } from '../components/sections/CareerHeader'
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
  careerHeader: CareerHeader,
}

const pageMap: SectionMap = {
  home: HomePage,
  career: CareerPage,
  education: EducationPage,
}

export function getSectionById(id: string): (props: unknown) => ReactElement {
  return sectionMap[id]
}

export function getPageById(id: string): (props: PageProps) => ReactElement {
  return pageMap[id]
}
