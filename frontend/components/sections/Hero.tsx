import { Entry } from 'contentful'
import { ReactElement } from 'react'
import { HeroModel } from '../../models/HeroModel'
import { SectionContainer } from '../ui/SectionContainer'

export function Hero({ fields }: Entry<HeroModel>): ReactElement {
  const { title, paragraph, height } = fields
  return (
    <SectionContainer style={{ height }}>
      <p>{title}</p>
      <p>{paragraph}</p>
    </SectionContainer>
  )
}
