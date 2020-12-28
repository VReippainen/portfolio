import { Entry } from 'contentful'
import { ReactElement } from 'react'
import styled from 'styled-components'
import { HeroModel } from '../../models/HeroModel'
import { Text } from '../../components/ui/Text'
import { FontSize } from '../../constants/FontSize'
import Image from 'next/image'
import { Colors } from '../../constants/Colors'

const HeroContainer = styled.div`
  min-height: 100vh;
`

const ColorBackground = styled.div`
  min-height: 100%;
  background-color: ${Colors.primary};
  opacity: 0.5;
  position: absolute;
  width: 100%;
`

const TextContainer = styled.div`
  text-align: center;
  position: relative;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  display: flex;
`

function HeroInternal({ title, paragraph }: HeroModel): ReactElement {
  return (
    <HeroContainer>
      <Image src={'/assets/placeholder.jpeg'} layout="fill" />
      <ColorBackground />
      <TextContainer>
        <Text style={{ fontSize: FontSize.S64, color: Colors.textWhite }}>
          {title}
        </Text>
        <Text style={{ fontSize: FontSize.S32, color: Colors.textWhite }}>
          {paragraph}
        </Text>
      </TextContainer>
    </HeroContainer>
  )
}

export function Hero({ fields }: Entry<HeroModel>): ReactElement {
  return <HeroInternal {...fields} />
}
