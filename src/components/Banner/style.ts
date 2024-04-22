import styled from 'styled-components'
import { cores } from '../../styles'

type Props = {
  image: string
}

export const Image = styled.div<Props>`
  width: 100%;
  height: 280px;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1;
    position: relative;
    height: 100%;
    padding: 32px 0;
  }
`

export const Filtro = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 900;
  line-height: 38px;
  text-align: left;
  color: ${cores.branco};
`

export const Tag = styled.p`
  font-size: 32px;
  font-weight: 100;
  line-height: 38px;
  text-align: left;
  color: ${cores.branco};
`
