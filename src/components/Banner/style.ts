import styled from 'styled-components'
import { cores } from '../../styles'

type Props = {
  imagem: string
}

export const Imagem = styled.div<Props>`
  width: 100%;
  height: 280px;
  background-image: url(${(props) => props.imagem});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 21;
    position: relative;
    height: 100%;
    padding: 32px;
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

export const Titulo = styled.h2`
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
