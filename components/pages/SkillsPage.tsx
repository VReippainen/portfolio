import { Colors } from '../../constants/Colors'
import { PageModel } from '../../models/PageModel'
import { SectionPadding } from '../ui/SectionPadding'
import { generateSections } from '../../utils/generateSections'
import React, { ReactElement } from 'react'
import styled from 'styled-components'

const Container = styled(SectionPadding)`
  background-color: ${Colors.backgroundPrimary};
  opacity: 0.9;
`

export function SkillsPage({ id, sections }: PageModel): ReactElement {
  return <Container {...{ id }}>{generateSections(sections)}</Container>
}
