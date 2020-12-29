import { Entry } from 'contentful'
import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { BaseSectionModel } from '../../models/BaseSectionModel'
import { PageModel } from '../../models/PageModel'
import { getSectionById } from '../../utils/sectionMapper'

export function generateSections(
  sections: Entry<BaseSectionModel>[]
): ReactElement[] {
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
