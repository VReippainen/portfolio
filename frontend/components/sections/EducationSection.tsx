import { Entry } from 'contentful'
import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { SectionContainer } from '../ui/SectionContainer'
import Image from 'next/image'
import { EducationModel } from '../../models/EducationModel'

const SectionItem = styled.div`
  margin-bottom: 20px;
`

function formatMinor(minors?: string[]): string {
  if (!minors || minors.length === 0) {
    return ''
  } else if (minors.length === 1) {
    return `Minor: ${minors[0]}`
  } else {
    return `TODO`
  }
}

export function EducationSection({
  fields,
}: Entry<EducationModel>): ReactElement {
  const { id, major, name, gpa, height, minors, faculty, university } = fields
  return (
    <SectionContainer style={{ flex: 2 }} id={id}>
      <SectionItem>
        <p>{`${name}, ${university}, ${faculty}`}</p>
        <p>{`Major: ${major}`}</p>
        <p>{formatMinor(minors)}</p>
        <p>{gpa}</p>
      </SectionItem>
    </SectionContainer>
  )
}
