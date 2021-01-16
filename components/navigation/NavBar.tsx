import React, { ReactElement } from 'react'
import { FontSize } from '../../constants/FontSize'
import { Colors } from '../../constants/Colors'
import styled from 'styled-components'
import Link from 'next/link'
import { Spacings } from '../../constants/Spacings'

interface Props {
  navUrls: NavUrl[]
}

interface NavUrl {
  url: string
  name: string
}

const A = styled.a`
  font-size: ${FontSize.S16};
  color: ${Colors.white};
  text-align: center;
  text-decoration: none;
`

function NavButton({ url, name }: NavUrl): ReactElement {
  return (
    <Link href={`?#${url}`} passHref>
      <NavItem>
        <A>{name}</A>
      </NavItem>
    </Link>
  )
}

const NavBarList = styled.ul`
  position: fixed;
  background-color: ${Colors.darkGrey};
  top: ${Spacings.S20}px;
  right: ${Spacings.S20}px;
  border-radius: 6px;
  list-style: none;
  padding: 0;
  margin: 0;
`

const NavItem = styled.li`
  padding: 30px 15px;
  text-align: center;
  &:hover a {
    color: ${Colors.primary};
  }
`

export function NavBar({ navUrls }: Props): ReactElement {
  return (
    <NavBarList>
      {navUrls.map((navUrl) => {
        return <NavButton {...{ ...navUrl }} key={navUrl.name} />
      })}
    </NavBarList>
  )
}
