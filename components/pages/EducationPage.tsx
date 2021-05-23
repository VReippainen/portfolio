import { Colors } from '../../constants/Colors'
import { PageModel } from '../../models/PageModel'
import { SectionPadding } from '../ui/SectionPadding'
import { generateSections } from '../../utils/generateSections'
import React, { ReactElement } from 'react'
import styled from 'styled-components'

const Container = styled(SectionPadding)`
  background-color: ${Colors.white};
`

export function EducationPage({ sections, id }: PageModel): ReactElement {
  return <Container {...{ id }}>{generateSections(sections)}</Container>
}
