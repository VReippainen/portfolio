import styled from 'styled-components'
import { MobileScreen, TabletScreen } from '../../constants/Breakpoints'

export const SectionPadding = styled.section`
  padding: 40px 180px;
  ${TabletScreen} {
    padding: 40px 40px;
  }
  ${MobileScreen} {
    padding: 40px 20px;
  }
`
