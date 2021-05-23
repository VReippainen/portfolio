import { Colors } from '../../constants/Colors'
import { FontSize } from '../../constants/FontSize'
import { MobileScreen } from '../../constants/Breakpoints'
import { Spacings } from '../../constants/Spacings'
import Link from 'next/link'
import React, { ReactElement } from 'react'
import styled from 'styled-components'

interface Props {
  navUrls: NavUrl[]
}

interface NavUrl {
  url: string
  name: string
}

function NavButton({ url, name }: NavUrl): ReactElement {
  return (
    <Link href={`?#${url}`}>
      <NavItem>{name}</NavItem>
    </Link>
  )
}

const NavBarList = styled.ul`
  position: fixed;
  top: ${Spacings.S20}px;
  right: ${Spacings.S20}px;
  border-radius: 6px;
  list-style: none;
  padding: 0;
  margin: 0;
  ${MobileScreen} {
    display: none;
  }
`

const NavItem = styled.li`
  padding: 30px 15px;
  text-align: center;
  font-size: ${FontSize.S16}px;
  background-color: ${Colors.darkGrey};
  color: ${Colors.white};
  text-align: center;
  text-decoration: none;
  &:hover {
    opacity: 0.85;
  }
`

// TODO: Implement NavBar for mobile
export function NavBar({ navUrls }: Props): ReactElement {
  return (
    <NavBarList>
      {navUrls.map((navUrl) => {
        return <NavButton {...{ ...navUrl }} key={navUrl.name} />
      })}
    </NavBarList>
  )
}
