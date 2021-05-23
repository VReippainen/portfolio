import React, { ReactElement } from 'react'
import { formatYear } from '../../utils/format'
import { Text } from '../ui/Text'
import { Spacings } from '../../constants/Spacings'
import { EducationModel } from '../../models/EducationModel'
import { FontSize } from '../../constants/FontSize'
import { SectionContainer, SectionItem } from '../ui/SectionContainer'

function formatMinors(minors?: string[]): string {
  if (!minors || minors.length === 0) {
    return ''
  } else if (minors.length === 1) {
    return `Minor: ${minors[0]}`
  } else {
    return `Minors: ${minors.reduce((acc, curr) => acc + ` ${curr},`, '')}`
  }
}

function formatDateRow(startDate: string, endDate?: string, ongoing?: boolean) {
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

export function EducationSection({
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
    <SectionContainer id={id}>
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
    </SectionContainer>
  )
}
