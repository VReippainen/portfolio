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

function GenericSection<T extends BaseModel>(
  props: Entry<T>
): ReactElement | null {
  switch (props.sys.contentType.sys.id) {
    case 'hero':
      // @ts-ignore
      return <Hero {...props} />
    case 'section':
      // @ts-ignore
      return <EducationSection {...props} />
    case 'careerSection':
      // @ts-ignore
      return <CareerSection {...props} />
    case 'pageHeader':
      // @ts-ignore
      return <PageHeader {...props} />
    case 'skillSection':
      // @ts-ignore
      return <SkillSection {...props} />
    case 'aboutMeSection':
      // @ts-ignore
      return <AboutMeSection {...props} />
    case 'contactSection':
      // @ts-ignore
      return <ContactSection {...props} />
    default:
      return null
  }
}
