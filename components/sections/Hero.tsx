import { Entry } from 'contentful'
import { ReactElement } from 'react'
import styled from 'styled-components'
import { HeroModel } from '../../models/HeroModel'
import { Text } from '../../components/ui/Text'
import { FontSize } from '../../constants/FontSize'
import { Colors } from '../../constants/Colors'
import { MobileScreen } from '../../constants/Breakpoints'

const HeroContainer = styled.div`
  min-height: 100vh;
  background-color: ${Colors.primaryTransparent};
`

const TextContainer = styled.div`
  text-align: center;
  position: absolute;
  width: 100%;
  top: 40%;
  justify-content: center;
  flex-direction: column;
  display: flex;
  ${MobileScreen} {
    top: 30%;
  }
`

const Image = styled.div<{ imageUrl: string }>`
  min-height: 100%;
  width: 100%;
  position: fixed;
  z-index: -1;
  background-image: url('${({ imageUrl }) => imageUrl}');
  background-size: cover;
  ${MobileScreen} {
    min-height: 1000px;
    position: absolute;
  }
`

function HeroInternal({
  title,
  paragraph,
  backgroundImage,
}: HeroModel): ReactElement {
  return (
    <>
      <Image imageUrl={backgroundImage.fields.file.url} />
      <HeroContainer>
        <TextContainer>
          <Text style={{ fontSize: FontSize.S64, color: Colors.white }}>
            {title}
          </Text>
          <Text style={{ fontSize: FontSize.S32, color: Colors.white }}>
            {paragraph}
          </Text>
        </TextContainer>
      </HeroContainer>
    </>
  )
}

export function Hero({ fields }: Entry<HeroModel>): ReactElement {
  return <HeroInternal {...fields} />
}
