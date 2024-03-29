import { AboutMeModel } from '../../models/AboutMeModel'
import { Colors } from '../../constants/Colors'
import { FontSize } from '../../constants/FontSize'
import { MobileScreen } from '../../constants/Breakpoints'
import { SectionContainer, SectionItem } from '../ui/SectionContainer'
import { Spacings } from '../../constants/Spacings'
import { Text, TextBold } from '../ui/Text'
import { getAge } from '../../utils/format'
import React from 'react'
import styled from 'styled-components'

const Title = styled(Text)`
  font-size: ${FontSize.S32}px;
  color: ${Colors.primary};
  margin-bottom: ${Spacings.S20}px;
`

const Image = styled.div<{ imageurl: string }>`
  width: 200px;
  height: 200px;
  background-image: url('${({ imageurl }) => imageurl}');
  background-size: cover;
  margin: 0 auto;
  border-radius: 50%;
`

const Column = styled(SectionItem)`
  ${MobileScreen} {
    text-align: center;
  }
`

export function AboutMeSection({
  id,
  title,
  name,
  description,
  image,
  location,
  dateOfBirth,
}: AboutMeModel): JSX.Element {
  return (
    <SectionContainer id={id}>
      <Column>
        <Title>{title}</Title>
        <Text>{description}</Text>
      </Column>
      <Column>
        <Image imageurl={image.fields.file.url} />
      </Column>
      <Column>
        <Title>Details</Title>
        <TextBold>Name:</TextBold>
        <Text style={{ marginBottom: Spacings.S6 }}>{name}</Text>
        <TextBold>Age:</TextBold>
        <Text style={{ marginBottom: Spacings.S6 }}>
          {getAge(new Date(dateOfBirth))}
        </Text>
        <TextBold>Location</TextBold>
        <Text>{location}</Text>
      </Column>
    </SectionContainer>
  )
}
