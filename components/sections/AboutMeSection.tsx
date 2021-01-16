import { Entry } from 'contentful'
import React, { ReactElement } from 'react'
import { Text, TextBold } from '../ui/Text'
import { SectionContainer, SectionItem } from '../ui/SectionContainer'
import { FontSize } from '../../constants/FontSize'
import { Colors } from '../../constants/Colors'
import { Spacings } from '../../constants/Spacings'
import styled from 'styled-components'
import { AboutMeModel } from '../../models/AboutMeModel'
import { MobileScreen } from '../../constants/Breakpoints'
import { getAge } from '../../utils/format'

const Title = styled(Text)`
  font-size: ${FontSize.S32}px;
  color: ${Colors.primary};
  margin-bottom: ${Spacings.S20}px;
`

const Image = styled.div<{ imageUrl: string }>`
  width: 200px;
  height: 200px;
  background-image: url('${({ imageUrl }) => imageUrl}');
  background-size: cover;
  margin: 0 auto;
  border-radius: 50%;
`

const Column = styled(SectionItem)`
  ${MobileScreen} {
    text-align: center;
  }
`

export function AboutMeSection({ fields }: Entry<AboutMeModel>): ReactElement {
  const { id, title, name, description, image, location, dateOfBirth } = fields
  return (
    <SectionContainer id={id}>
      <Column>
        <Title>{title}</Title>
        <Text>{description}</Text>
      </Column>
      <Column>
        <Image imageUrl={image.fields.file.url} />
      </Column>
      <Column>
        <TextBold>Name:</TextBold>
        <Text>{name}</Text>
        <TextBold>Age:</TextBold>
        <Text>{getAge(new Date(dateOfBirth))}</Text>
        <TextBold>Location</TextBold>
        <Text>{location}</Text>
      </Column>
    </SectionContainer>
  )
}
