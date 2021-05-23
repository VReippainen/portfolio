import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Colors } from '../../constants/Colors'
import { PageModel } from '../../models/PageModel'
import { generateSections } from '../../utils/generateSections'
import { SectionPadding } from '../ui/SectionPadding'

const Container = styled(SectionPadding)`
  background-color: ${Colors.backgroundPrimary};
  opacity: 0.9;
`

export function CareerPage({ sections, id }: PageModel): ReactElement {
  return <Container {...{ id }}>{generateSections(sections)}</Container>
}
