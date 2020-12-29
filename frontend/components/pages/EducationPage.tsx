import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { MobileScreen } from '../../constants/Breakpoints'
import { Colors } from '../../constants/Colors'
import { generateSections, PageProps } from './HomePage'

const Container = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 40px 180px;
  background-color: ${Colors.backgroundSecondary};
  ${MobileScreen} {
    padding: 40px 20px;
  }
`

export function EducationPage({ pageEntry }: PageProps): ReactElement {
  const { sections, name } = pageEntry.fields
  return <Container id={name}>{generateSections(sections)}</Container>
}
