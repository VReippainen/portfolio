import { ContactDetailModel } from '../../models/ContactDetailModel'
import { ContactModel } from '../../models/ContactModel'
import { Entry } from 'contentful'
import { FlexRow } from '../ui/FlexRow'
import { MobileScreen } from '../../constants/Breakpoints'
import { SectionContainer } from '../ui/SectionContainer'
import { Spacings } from '../../constants/Spacings'
import { Text } from '../ui/Text'
import Image from 'next/image'
import Link from 'next/link'
import React, { ReactElement } from 'react'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  margin-left: ${Spacings.S20}px;
  margin-bottom: ${Spacings.S10}px;
  text-decoration: none;
  flex-direction: row;
  display: flex;
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
            <StyledLink
              href={link}
              passHref
              key={link}
              target="_blank"
              rel="noopener"
            >
              {icon ? (
                <Image
                  src={icon.fields.file.url}
                  alt={icon.fields.title}
                  loading="lazy"
                  width={24}
                  height={24}
                />
              ) : null}
              <LinkText>{id}</LinkText>
            </StyledLink>
          )
        })}
      </Links>
    </SectionContainer>
  )
}
