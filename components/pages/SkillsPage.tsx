import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Colors } from '../../constants/Colors'
import { SectionPadding } from '../ui/SectionPadding'
import { generateSections, PageProps } from './HomePage'

const Container = styled(SectionPadding)`
  background-color: ${Colors.backgroundPrimary};
  opacity: 0.9;
`

export function SkillsPage({ pageEntry }: PageProps): ReactElement {
  const { sections, id } = pageEntry.fields
  return <Container {...{ id }}>{generateSections(sections)}</Container>
}
