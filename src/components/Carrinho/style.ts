import styled from 'styled-components'
import { cores } from '../../styles'

type Props = {
  visivel: boolean
}

export const Container = styled.div<Props>`
  position: fixed;
  display: ${(props) => (props.visivel === true ? 'block' : 'none')};
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
`

export const Card = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 360px;
  height: 100%;
  padding: 32px 8px;
  background-color: ${cores.laranja};
`
