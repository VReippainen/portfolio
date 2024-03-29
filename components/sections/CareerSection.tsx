import { CareerModel } from '../../models/CareerModel'
import { FontSize } from '../../constants/FontSize'
import { LinkPrimary } from './LinkPrimary'
import { SectionContainer, SectionItem } from '../ui/SectionContainer'
import { Spacings } from '../../constants/Spacings'
import { Text } from '../ui/Text'
import { formatMonthYear } from '../../utils/format'
import React, { Fragment } from 'react'

function formatDateRow(startDate: string, endDate?: string, current?: boolean) {
  if (startDate) {
    if (endDate) {
      return `${formatMonthYear(new Date(startDate))} - ${formatMonthYear(
        new Date(endDate)
      )}`
    } else if (current) {
      return `${formatMonthYear(new Date(startDate))} - current`
    }
  }
  return ''
}

function formatTechnologies(technologies: string[]): string {
  if (technologies.length > 0) {
    return `Technologies: ${technologies.reduce(
      (acc, curr) => acc + ` ${curr},`,
      ''
    )}`.slice(0, -1)
  }
  return ''
}

export function CareerSection({
  id,
  title,
  description,
  technologies,
  startDate,
  endDate,
  current,
  company,
  link,
  hide,
}: CareerModel): JSX.Element {
  if (hide) {
    return <Fragment />
  }
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
          {company}
        </Text>
        <Text>{formatDateRow(startDate, endDate, current)}</Text>
      </SectionItem>
      <SectionItem style={{ flex: 2 }}>
        <Text style={{ marginBottom: Spacings.S8, fontWeight: 'bold' }}>
          {title}
        </Text>
        <Text style={{ marginBottom: Spacings.S8 }}>{description}</Text>
        {technologies ? (
          <Text style={{ marginBottom: Spacings.S8 }}>
            {formatTechnologies(technologies)}
          </Text>
        ) : null}
        {link ? <LinkPrimary {...link} /> : null}
      </SectionItem>
    </SectionContainer>
  )
}
