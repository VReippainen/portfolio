import { CareerPage } from '../components/pages/CareerPage'
import { ContactPage } from '../components/pages/ContactPage'
import { EducationPage } from '../components/pages/EducationPage'
import { Entry } from 'contentful'
import { HomePage } from '../components/pages/HomePage'
import { PageModel } from '../models/PageModel'
import { ProfilePage } from '../components/pages/ProfilePage'
import { SkillsPage } from '../components/pages/SkillsPage'
import React from 'react'

export function generatePages(pages: Entry<PageModel>[]): JSX.Element[] {
  return pages.map(({ fields }: Entry<PageModel>) => (
    <GenericPage {...fields} key={fields.id} />
  ))
}

function GenericPage(fields: PageModel): JSX.Element | null {
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
