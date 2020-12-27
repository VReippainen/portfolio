import { Entry } from 'contentful'
import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { SectionModel } from '../../models/SectionModel'
import { SectionContainer } from '../ui/SectionContainer'
import Image from 'next/image'

const SectionItem = styled.div`
  flex: 1;
  margin: 20px;
`

export function Section({ fields }: Entry<SectionModel>): ReactElement {
  const { id, name, paragraph, height } = fields
  return (
    <SectionContainer style={{ height, flex: 2 }} id={id}>
      <SectionItem>
        <p>{name}</p>
        <p>{paragraph}</p>
      </SectionItem>
      <SectionItem style={{ position: 'relative' }}>
        <Image
          src={'/assets/placeholder.jpeg'}
          layout="fill"
          objectFit="contain"
        />
      </SectionItem>
    </SectionContainer>
  )
}
