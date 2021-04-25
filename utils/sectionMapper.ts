import { ReactElement } from 'react'
import { CareerPage } from '../components/pages/CareerPage'
import { EducationPage } from '../components/pages/EducationPage'
import { HomePage, PageProps } from '../components/pages/HomePage'
import { SkillsPage } from '../components/pages/SkillsPage'
import { PageHeader } from '../components/sections/PageHeader'
import { CareerSection } from '../components/sections/CareerSection'
import { EducationSection } from '../components/sections/EducationSection'
import { Hero } from '../components/sections/Hero'
import { SkillSection } from '../components/sections/SkillSection'
import { ProfilePage } from '../components/pages/ProfilePage'
import { AboutMeSection } from '../components/sections/AboutMeSection'
import { ContactSection } from '../components/sections/ContactSection'
import { ContactPage } from '../components/pages/ContactPage'

interface SectionMap {
  [key: string]: (props: unknown) => ReactElement
}

const sectionMap: SectionMap = {
  hero: Hero,
  section: EducationSection,
  careerSection: CareerSection,
  pageHeader: PageHeader,
  skillSection: SkillSection,
  aboutMeSection: AboutMeSection,
  contactSection: ContactSection,
}

const pageMap: SectionMap = {
  home: HomePage,
  career: CareerPage,
  education: EducationPage,
  skills: SkillsPage,
  profile: ProfilePage,
  contact: ContactPage,
}

export function getSectionById(id: string): (props: unknown) => ReactElement {
  return sectionMap[id]
}

export function getPageById(id: string): (props: PageProps) => ReactElement {
  return pageMap[id]
}
