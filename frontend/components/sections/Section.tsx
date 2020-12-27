import { Entry } from 'contentful'
import React, { ReactElement } from 'react'
import { SectionModel } from '../../models/SectionModel'
import { SectionContainer } from '../ui/SectionContainer'

export function Section({ fields }: Entry<SectionModel>): ReactElement {
  const { id, name, paragraph, height } = fields
  return (
    <SectionContainer style={{ height }} id={id}>
      <p>{name}</p>
      <p>{paragraph}</p>
    </SectionContainer>
  )
}
