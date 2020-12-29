import { Entry } from 'contentful'
import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { formatYear } from '../../utils/format'
import { Text } from '../ui/Text'
import { Spacings } from '../../constants/Spacings'
import { EducationModel } from '../../models/EducationModel'
import { MobileScreen } from '../../constants/Breakpoints'
import { FontSize } from '../../constants/FontSize'

function formatMinors(minors?: string[]): string {
  if (!minors || minors.length === 0) {
    return ''
  } else if (minors.length === 1) {
    return `Minor: ${minors[0]}`
  } else {
    return `Minors: ${minors.reduce((acc, curr) => acc + ` ${curr},`, '')}`
  }
}

const SectionItem = styled.div`
  flex: 1;
  margin: 20px;
`

export const EducationContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  ${MobileScreen} {
    flex-direction: column;
  }
`

function formatDateRow(startDate: string, endDate: string, ongoing: boolean) {
  let formattedRow = ''
  if (startDate) {
    formattedRow += `${formatYear(new Date(startDate))} - `
  }
  if (endDate) {
    formattedRow += formatYear(new Date(endDate))
  }
  if (ongoing) {
    formattedRow += ' (estimated)'
  }
  return formattedRow
}

export function EducationSectionInternal({
  id,
  name,
  minors,
  startDate,
  endDate,
  faculty,
  university,
  gpa,
  major,
  ongoing,
  creditsDone,
  creditsTotal,
}: EducationModel): ReactElement {
  return (
    <EducationContainer style={{ flex: 3 }} id={id}>
      <SectionItem>
        <Text
          style={{
            marginBottom: Spacings.S8,
            fontWeight: 'bold',
            fontSize: FontSize.S20,
          }}
        >
          {`${university}, ${faculty}`}
        </Text>
        <Text>{formatDateRow(startDate, endDate, ongoing)}</Text>
      </SectionItem>
      <SectionItem style={{ flex: 2, marginBottom: Spacings.S8 }}>
        <Text style={{ marginBottom: Spacings.S8, fontWeight: 'bold' }}>
          {`${name} - ${major}`}
        </Text>
        {ongoing && creditsDone && creditsTotal ? (
          <Text>{`Credits done: ${creditsDone}/${creditsTotal} cr.`}</Text>
        ) : null}
        <Text>{`${formatMinors(minors)}`}</Text>
        {gpa ? <Text>{`GPA: ${gpa}`}</Text> : null}
      </SectionItem>
    </EducationContainer>
  )
}

export function EducationSection({
  fields,
}: Entry<EducationModel>): ReactElement {
  return <EducationSectionInternal {...fields} />
}
