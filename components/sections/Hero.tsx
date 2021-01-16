import { Entry } from 'contentful'
import { ReactElement } from 'react'
import styled from 'styled-components'
import { HeroModel } from '../../models/HeroModel'
import { Text } from '../../components/ui/Text'
import { FontSize } from '../../constants/FontSize'
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

const Image = styled.div<{ imageUrl: string }>`
  min-height: 100%;
  width: 100%;
  position: absolute;
  background-image: url('${({ imageUrl }) => imageUrl}');
  background-size: cover;
`

function HeroInternal({
  title,
  paragraph,
  backgroundImage,
}: HeroModel): ReactElement {
  return (
    <HeroContainer>
      <Image imageUrl={backgroundImage.fields.file.url} />
      <ColorBackground />
      <TextContainer>
        <Text
          style={{ fontSize: FontSize.S64, color: Colors.backgroundSecondary }}
        >
          {title}
        </Text>
        <Text
          style={{ fontSize: FontSize.S32, color: Colors.backgroundSecondary }}
        >
          {paragraph}
        </Text>
      </TextContainer>
    </HeroContainer>
  )
}

export function Hero({ fields }: Entry<HeroModel>): ReactElement {
  return <HeroInternal {...fields} />
}
