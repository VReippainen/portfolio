import styled from 'styled-components'
import { MobileScreen } from '../../constants/Breakpoints'
import { Spacings } from '../../constants/Spacings'

const SectionItem = styled.div`
  flex: 1;
  margin-top: ${Spacings.S20}px;
  margin-left: ${Spacings.S20}px;
  ${MobileScreen} {
    margin-top: 0;
    margin-left: 0;
    margin-bottom: ${Spacings.S20}px;
  }
`

const SectionContainer = styled.section`
  display: flex;
  flex-direction: row;
  margin: 20px;
  ${MobileScreen} {
    flex-direction: column;
    margin: 20px 0;
  }
`

export { SectionContainer, SectionItem }
