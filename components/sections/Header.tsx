import { ReactElement } from 'react'
import styled from 'styled-components'
import { NavUrl } from '../../models/NavUrl'
import Link from 'next/link'

const Nav = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  border-bottom-color: gray;
  border-bottom-width: 1px;
  border-bottom: solid;
`

const NavLink = styled.a`
  margin-left: 16px;
  &:hover {
    opacity: 0.5;
  }
`

interface Props {
  navUrls: NavUrl[]
}

export function Header({ navUrls }: Props): ReactElement {
  return (
    <Nav id="nav">
      {navUrls.map(({ name, url }) => (
        <Link key={name} href={url} passHref>
          <NavLink>{name}</NavLink>
        </Link>
      ))}
    </Nav>
  )
}
