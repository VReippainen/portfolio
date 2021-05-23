import { Entry } from 'contentful'
import React, { ReactElement } from 'react'
import { CareerPage } from '../components/pages/CareerPage'
import { ContactPage } from '../components/pages/ContactPage'
import { EducationPage } from '../components/pages/EducationPage'
import { HomePage } from '../components/pages/HomePage'
import { ProfilePage } from '../components/pages/ProfilePage'
import { SkillsPage } from '../components/pages/SkillsPage'
import { PageModel } from '../models/PageModel'

export function generatePages(pages: Entry<PageModel>[]): ReactElement[] {
  return pages.map(({ fields }: Entry<PageModel>) => (
    <GenericPage {...fields} key={fields.id} />
  ))
}

function GenericPage(fields: PageModel): ReactElement | null {
  switch (fields.id) {
    case 'home':
      return <HomePage {...fields} />
    case 'career':
      return <CareerPage {...fields} />
    case 'education':
      return <EducationPage {...fields} />
    case 'skills':
      return <SkillsPage {...fields} />
    case 'profile':
      return <ProfilePage {...fields} />
    case 'contact':
      return <ContactPage {...fields} />
    default:
      return null
  }
}
