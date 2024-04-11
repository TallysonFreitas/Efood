import styled from 'styled-components'
import { cores } from '../../styles'

export const ItemCarrinho = styled.div`
  width: 100%;
  padding: 8px;
  background-color: ${cores.marromClaro};
  display: flex;
  justify-content: flex-start;
  gap: 8px;
  margin-bottom: 8px;
  position: relative;
`

type Props = {
  imagem: string
}

export const Imagem = styled.div<Props>`
  width: 80px;
  height: 80px;
  background-image: url(${(props) => props.imagem});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
  color: ${cores.laranja};
  margin-bottom: 16px;
`

export const Preco = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${cores.laranja};
`

export const Delete = styled.div`
  cursor: pointer;
  width: 16px;
  height: 16px;
  position: absolute;
  bottom: 8px;
  right: 8px;

  img {
    width: 100%;
    height: 100%;
  }
`
