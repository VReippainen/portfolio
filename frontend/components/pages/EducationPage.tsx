import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { generateSections, PageProps } from './HomePage'

const Container = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export function EducationPage({ pageEntry }: PageProps): ReactElement {
  const { sections, name } = pageEntry.fields
  return <Container id={name}>{generateSections(sections)}</Container>
}
