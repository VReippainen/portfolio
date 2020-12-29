import styled from 'styled-components'
import { MobileScreen } from '../../constants/Breakpoints'
import { Spacings } from '../../constants/Spacings'

const SectionItem = styled.div`
  flex: 1;
  margin-top: ${Spacings.S20}px;
  margin-left: ${Spacings.S20}px;
  ${MobileScreen} {
    margin: 20px 0;
  }
`

const SectionContainer = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 20px;
  ${MobileScreen} {
    flex-direction: column;
    margin: 20px 0;
  }
`

export { SectionContainer, SectionItem }
