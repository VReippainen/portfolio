import { Entry } from 'contentful'
import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { SectionContainer } from '../ui/SectionContainer'
import Image from 'next/image'
import { CareerModel } from '../../models/CareerModel'

const SectionItem = styled.div`
  flex: 1;
  margin: 20px;
`

export function CareerSection({ fields }: Entry<CareerModel>): ReactElement {
  const { id, title, description, height, technologies } = fields
  return (
    <SectionContainer style={{ height, flex: 2 }} id={id}>
      <SectionItem>
        <p>{title}</p>
        <p>{description}</p>
        <p>{technologies}</p>
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
