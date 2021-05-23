import { MobileScreen, TabletScreen } from '../../constants/Breakpoints'
import styled from 'styled-components'

export const SectionPadding = styled.section`
  flex: 1;
  flex-direction: column;
  padding: 40px 180px 100px 180px;
  min-height: 100vh;
  ${TabletScreen} {
    padding: 40px 40px;
  }
  ${MobileScreen} {
    padding: 40px 20px;
  }
`
