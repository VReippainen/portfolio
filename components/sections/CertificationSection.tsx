import { CertificationModel } from '../../models/CertificationModel'
import { LinkPrimary } from './LinkPrimary'
import { SectionContainer, SectionItem } from '../ui/SectionContainer'
import { Spacings } from '../../constants/Spacings'
import { Text } from '../ui/Text'
import { formatMonthYear } from '../../utils/format'
import React, { Fragment, type JSX } from 'react'

export function CertificationSection({
  id,
  title,
  description,
  date,
  link,
  hide,
}: CertificationModel): JSX.Element {
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
          }}
        >
          {title}
        </Text>
        {date ? <Text>Issued {formatMonthYear(new Date(date))}</Text> : null}
      </SectionItem>
      <SectionItem style={{ flex: 2 }}>
        <Text style={{ marginBottom: Spacings.S8 }}>{description}</Text>
        {link ? <LinkPrimary {...link} /> : null}
      </SectionItem>
    </SectionContainer>
  )
}
