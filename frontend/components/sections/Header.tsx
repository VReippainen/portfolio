import { ReactElement } from 'react'
import styled from 'styled-components'
import { NavUrl } from '../../models/NavUrl'

const Nav = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-bottom-color: gray;
  border-bottom-width: 1px;
  border-bottom: solid;
`

interface Props {
  navUrls: NavUrl[]
}

export function Header({ navUrls }: Props): ReactElement {
  return (
    <Nav id="nav">
      {navUrls.map(({ name }) => (
        <p key={name} style={{ marginLeft: '16px' }}>
          {name}
        </p>
      ))}
    </Nav>
  )
}
