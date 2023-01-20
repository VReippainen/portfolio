import { Colors } from '../../constants/Colors'
import { FlexRow } from '../ui/FlexRow'
import { FontSize } from '../../constants/FontSize'
import { SectionContainer } from '../ui/SectionContainer'
import { SkillModel } from '../../models/SkillModel'
import { SkillsModel } from '../../models/SkillsModel'
import { Spacings } from '../../constants/Spacings'
import { Text } from '../ui/Text'
import React, { Fragment } from 'react'
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

export function SkillSection({ id, title, skills }: SkillsModel): JSX.Element {
  if (skills.length === 0) {
    return <Fragment />
  }
  return (
    <SectionContainer style={{ flexDirection: 'column' }} id={id}>
      <Title>{title}</Title>
      <FlexRow style={{ flex: 2, flexWrap: 'wrap' }}>
        {skills
          .sort((a, b) => b.fields.stars - a.fields.stars)
          .map(({ fields }) => (
            <Skill {...fields} key={fields.id} />
          ))}
      </FlexRow>
    </SectionContainer>
  )
}
