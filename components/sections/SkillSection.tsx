import { Entry } from 'contentful'
import React, { ReactElement } from 'react'
import { Text } from '../ui/Text'
import { SectionContainer } from '../ui/SectionContainer'
import { SkillsModel } from '../../models/SkillsModel'
import { FontSize } from '../../constants/FontSize'
import { Colors } from '../../constants/Colors'
import { Spacings } from '../../constants/Spacings'
import { SkillModel } from '../../models/SkillModel'
import { FlexRow } from '../ui/FlexRow'
import styled from 'styled-components'

const SkillContainer = styled(FlexRow)`
  flex: 1;
  flex-basis: 45%;
  min-width: 300px;
  &:hover {
    background-color: ${Colors.lightGrey};
  }
  padding: ${Spacings.S6}px ${Spacings.S8}px;
`

interface StarProps {
  stars: number
  color?: string
}

const UNICODE_STAR = '\u2605'

function Stars({ stars, color }: StarProps) {
  return <Text style={{ color }}>{UNICODE_STAR.repeat(stars)}</Text>
}

function StarRow({ stars }: StarProps) {
  return (
    <FlexRow>
      <Stars stars={stars} color={Colors.primary} />
      <Stars stars={5 - stars} color={Colors.grey} />
    </FlexRow>
  )
}

function Skill({ name, stars }: SkillModel) {
  return (
    <SkillContainer>
      <Text style={{ flex: 1 }}>{name}</Text>
      <StarRow {...{ stars }} />
    </SkillContainer>
  )
}

const Title = styled(Text)`
  font-size: ${FontSize.S32}px;
  color: ${Colors.primary};
  margin-top: ${Spacings.S20}px;
  margin-bottom: ${Spacings.S20}px;
`

export function SkillSection({ fields }: Entry<SkillsModel>): ReactElement {
  const { id, title, skills } = fields
  if (skills.length === 0) {
    return null
  }
  return (
    <SectionContainer style={{ flexDirection: 'column' }} id={id}>
      <Title>{title}</Title>
      <FlexRow style={{ flex: 2, flexWrap: 'wrap' }}>
        {skills.map(({ fields }) => (
          <Skill {...fields} key={fields.id} />
        ))}
      </FlexRow>
    </SectionContainer>
  )
}
