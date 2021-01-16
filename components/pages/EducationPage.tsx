import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Colors } from '../../constants/Colors'
import { SectionPadding } from '../ui/SectionPadding'
import { generateSections, PageProps } from './HomePage'

const Container = styled(SectionPadding)`
  background-color: ${Colors.white};
`

export function EducationPage({ pageEntry }: PageProps): ReactElement {
  const { sections, id } = pageEntry.fields
  return <Container {...{ id }}>{generateSections(sections)}</Container>
}
