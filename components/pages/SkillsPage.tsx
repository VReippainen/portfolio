import { Colors } from '../../constants/Colors'
import { PageModel } from '../../models/PageModel'
import { SectionPadding } from '../ui/SectionPadding'
import { generateSections } from '../../utils/generateSections'
import React from 'react'
import styled from 'styled-components'

const Container = styled(SectionPadding)`
  background-color: ${Colors.backgroundPrimary};
  opacity: 0.9;
`

export function SkillsPage({ id, sections }: PageModel): JSX.Element {
  return <Container {...{ id }}>{generateSections(sections)}</Container>
}
