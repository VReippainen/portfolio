import { Entry } from 'contentful'
import React, { ReactElement } from 'react'
import { Text } from '../ui/Text'
import { SectionContainer } from '../ui/SectionContainer'
import { Spacings } from '../../constants/Spacings'
import styled from 'styled-components'
import { MobileScreen } from '../../constants/Breakpoints'
import { ContactModel } from '../../models/ContactModel'
import { ContactDetailModel } from '../../models/ContactDetailModel'
import { FlexRow } from '../ui/FlexRow'
import Link from 'next/link'

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

export function ContactSection({ fields }: Entry<ContactModel>): ReactElement {
  const { id, contactLinks } = fields
  return (
    <SectionContainer {...{ id }}>
      <Links>
        {contactLinks.map(({ fields }: Entry<ContactDetailModel>) => {
          const { link, icon, id } = fields
          return (
            <Link href={link} passHref>
              <LinkContainer key={link} as="a" target="_blank" rel="noopener">
                {icon ? (
                  <img src={icon.fields.file.url} alt={icon.fields.title} />
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
