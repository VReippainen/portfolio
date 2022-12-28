import { Colors } from '../../constants/Colors'
import { MobileScreen } from '../../constants/Breakpoints'
import { Spacings } from '../../constants/Spacings'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

interface Props {
  navUrls: NavUrl[]
}

interface NavUrl {
  url: string
  name: string
}

const NavBarContainer = styled.div`
  position: fixed;
  top: ${Spacings.S20}px;
  right: ${Spacings.S20}px;
  display: flex;
  flex-direction: column;
  ${MobileScreen} {
    display: none;
  }
`

const NavItem = styled(Link)`
  padding: 30px 16px;
  text-align: center;
  background-color: ${Colors.darkGrey};
  color: ${Colors.white};
  text-decoration: none;
  &:hover {
    opacity: 0.85;
  }
`

// TODO: Implement NavBar for mobile
export function NavBar({ navUrls }: Props): JSX.Element {
  return (
    <NavBarContainer>
      {navUrls.map(({ name, url }) => (
        <NavItem key={name} href={`?#${url}`}>
          {name}
        </NavItem>
      ))}
    </NavBarContainer>
  )
}
