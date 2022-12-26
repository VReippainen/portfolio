import { ContactDetailModel } from '../../models/ContactDetailModel'
import { ContactModel } from '../../models/ContactModel'
import { Entry } from 'contentful'
import { FlexRow } from '../ui/FlexRow'
import { MobileScreen } from '../../constants/Breakpoints'
import { SectionContainer } from '../ui/SectionContainer'
import { Spacings } from '../../constants/Spacings'
import { Text } from '../ui/Text'
import Link from 'next/link'
import React, { ReactElement } from 'react'
import styled from 'styled-components'

const LinkContainer = styled(FlexRow)`
  margin-left: ${Spacings.S20}px;
  margin-bottom: ${Spacings.S10}px;
  text-decoration: none;
  &:hover {
    opacity: 0.7;
  }
`

const Links = styled(FlexRow)`
  flex-wrap: wrap;
  max-width: 1000px;
  margin: auto;
  ${MobileScreen} {
    flex-direction: column;
  }
`

const LinkText = styled(Text)`
  margin-left: ${Spacings.S8}px;
  margin-right: ${Spacings.S8}px;
`

export function ContactSection({
  id,
  contactLinks,
}: ContactModel): ReactElement {
  return (
    <SectionContainer {...{ id }}>
      <Links>
        {contactLinks.map(({ fields }: Entry<ContactDetailModel>) => {
          const { link, icon, id } = fields
          return (
            <Link href={link} passHref key={link}>
              <LinkContainer key={link} as="a" target="_blank" rel="noopener">
                {icon ? (
                  <img
                    src={icon.fields.file.url}
                    alt={icon.fields.title}
                    loading="lazy"
                  />
                ) : null}
                <LinkText>{id}</LinkText>
              </LinkContainer>
            </Link>
          )
        })}
      </Links>
    </SectionContainer>
  )
}
