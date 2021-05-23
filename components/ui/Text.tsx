import { Colors } from '../../constants/Colors'
import { FontSize } from '../../constants/FontSize'
import styled from 'styled-components'

export const Text = styled.p`
  font-size: ${FontSize.S16}px;
  color: ${Colors.darkGrey};
  margin: 0;
  line-height: 1.25;
`

export const TextBold = styled(Text)`
  font-weight: bold;
`
