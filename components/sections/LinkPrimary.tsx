import { Colors } from '../../constants/Colors'
import { Entry } from 'contentful'
import { FontSize } from '../../constants/FontSize'
import { LinkModel } from '../../models/LinkModel'
import Link from 'next/link'
import React, { ReactElement } from 'react'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  font-size: ${FontSize.S16};
  color: ${Colors.primary};
`

function LinkPrimaryInternal({ url, title }: LinkModel): ReactElement {
  return (
    <StyledLink href={url} passHref target="_blank" rel="noopener">
      {title}
    </StyledLink>
  )
}

export function LinkPrimary({ fields }: Entry<LinkModel>): ReactElement {
  return <LinkPrimaryInternal {...fields} />
}
