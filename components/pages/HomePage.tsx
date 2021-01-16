import { Entry } from 'contentful'
import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { BaseModel } from '../../models/BaseModel'
import { PageModel } from '../../models/PageModel'
import { getSectionById } from '../../utils/sectionMapper'

export function generateSections(sections: Entry<BaseModel>[]): ReactElement[] {
  return sections
    .map((section) => {
      const SectionComponent = getSectionById(section.sys.contentType.sys.id)
      return SectionComponent ? (
        <SectionComponent key={section.fields.id} {...section} />
      ) : null
    })
    .filter((e) => e !== null)
}

const Container = styled.section``

export interface PageProps {
  pageEntry: Entry<PageModel>
}

export function HomePage({ pageEntry }: PageProps): ReactElement {
  const { sections, name } = pageEntry.fields
  return <Container id={name}>{generateSections(sections)}</Container>
}
