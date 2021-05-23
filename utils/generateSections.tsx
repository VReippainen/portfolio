/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Entry } from 'contentful'
import React, { ReactElement } from 'react'
import { AboutMeSection } from '../components/sections/AboutMeSection'
import { CareerSection } from '../components/sections/CareerSection'
import { ContactSection } from '../components/sections/ContactSection'
import { EducationSection } from '../components/sections/EducationSection'
import { Hero } from '../components/sections/Hero'
import { PageHeader } from '../components/sections/PageHeader'
import { SkillSection } from '../components/sections/SkillSection'
import { BaseModel } from '../models/BaseModel'

export function generateSections<T extends BaseModel>(
  sections: Entry<T>[]
): ReactElement[] {
  return sections.map((section: Entry<T>) => (
    <GenericSection {...section} key={section.fields.id} />
  ))
}

function GenericSection<T extends BaseModel>({
  fields,
  sys,
}: Entry<T>): ReactElement | null {
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
