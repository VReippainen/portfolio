/* eslint-disable @typescript-eslint/ban-ts-comment */
import { AboutMeSection } from '../components/sections/AboutMeSection'
import { BaseModel } from '../models/BaseModel'
import { CareerSection } from '../components/sections/CareerSection'
import { ContactSection } from '../components/sections/ContactSection'
import { EducationSection } from '../components/sections/EducationSection'
import { Entry } from 'contentful'
import { Hero } from '../components/sections/Hero'
import { PageHeader } from '../components/sections/PageHeader'
import { SkillSection } from '../components/sections/SkillSection'
import React from 'react'

export function generateSections<T extends BaseModel>(
  sections: Entry<T>[]
): JSX.Element[] {
  return sections.map((section: Entry<T>) => (
    <GenericSection {...section} key={section.fields.id} />
  ))
}

function GenericSection<T extends BaseModel>({
  fields,
  sys,
}: Entry<T>): JSX.Element | null {
  switch (sys.contentType.sys.id) {
    case 'hero':
      // @ts-ignore
      return <Hero {...fields} />
    case 'section':
      // @ts-ignore
      return <EducationSection {...fields} />
    case 'careerSection':
      // @ts-ignore
      return <CareerSection {...fields} />
    case 'pageHeader':
      // @ts-ignore
      return <PageHeader {...fields} />
    case 'skillSection':
      // @ts-ignore
      return <SkillSection {...fields} />
    case 'aboutMeSection':
      // @ts-ignore
      return <AboutMeSection {...fields} />
    case 'contactSection':
      // @ts-ignore
      return <ContactSection {...fields} />
    default:
      return null
  }
}
