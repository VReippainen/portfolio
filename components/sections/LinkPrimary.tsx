import { Colors } from '../../constants/Colors'
import { Entry } from 'contentful'
import { FontSize } from '../../constants/FontSize'
import { LinkModel } from '../../models/LinkModel'
import Link from 'next/link'
import React, { ReactElement } from 'react'
import styled from 'styled-components'

const A = styled.a`
  font-size: ${FontSize.S16};
  color: ${Colors.primary};
`

function LinkPrimaryInternal({ url, title }: LinkModel): ReactElement {
  return (
    <Link href={url} passHref>
      <A target="_blank" rel="noopener">
        {title}
      </A>
    </Link>
  )
}

export function LinkPrimary({ fields }: Entry<LinkModel>): ReactElement {
  return <LinkPrimaryInternal {...fields} />
}
