import styled from 'styled-components'
import { cores } from '../../styles'

type Props = {
  image: string
  type: 'home' | 'nav'
}

export const ContainerHeader = styled.header<Props>`
  background-image: url(${(props) => props.image});

  padding: 40px;

  .container {
    height: 100%;
    display: flex;
    flex-direction: ${(props) => (props.type == 'nav' ? 'row' : 'column')};
    justify-content: ${(props) =>
      props.type == 'nav' ? 'space-between' : 'center'};
    align-items: center;
  }
`

export const Logo = styled.img`
  width: 126px;
  height: 56px;
`

export const Texto = styled.p`
  font-size: 18px;
  font-weight: 900;
  line-height: 20px;
  color: ${cores.laranja};
`

export const Titulo = styled.h2`
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
  max-width: 540px;
  text-align: center;
  color: ${cores.laranja};
  margin-top: 136px;
`