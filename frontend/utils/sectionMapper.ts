import { ReactElement } from 'react'
import { Hero } from '../components/sections/Hero'
import { Section } from '../components/sections/Section'

interface SectionMap {
  [key: string]: (props: unknown) => ReactElement
}

const sectionMap: SectionMap = {
  section: Section,
  hero: Hero,
}

export function getSectionById(id: string): (props: unknown) => ReactElement {
  return sectionMap[id]
}
