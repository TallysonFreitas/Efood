import styled from 'styled-components'
import { cores } from '../../styles'

type Props = {
  visible: boolean
}

export const Container = styled.div<Props>`
  position: fixed;
  display: ${(props) => (props.visible === true ? 'block' : 'none')};
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  height: 100%;
  z-index: 2;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    height: 100%;
    width: 100%;
    z-index: 3;
  }

  .text-center {
    text-align: center;
  }
`

export const ContainCard = styled.div`
  width: 100%;
  min-height: 100%;
  height: 100%;
  position: relative;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0px;
  }
`

export const Card = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 360px;
  min-height: 100%;
  padding: 32px 8px;
  background-color: ${cores.laranja};
  z-index: 3;

  .error {
    border: 2px solid #f00;
  }
`

export const Close = styled.div`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`

export const TotalPedidos = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 40px;
`

export const Texto = styled.p`
  color: ${cores.marromClaro};
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  height: 16px;
`

export const Entrega = styled.button`
  width: 100%;
  background-color: ${cores.marromClaro};
  font-size: 14px;
  border: none;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  color: ${cores.laranja};
  padding: 4px 0;
  margin-top: 16px;
  cursor: pointer;
`

export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  text-align: left;
  color: ${cores.marromClaro};
`

export const Info = styled.p`
  color: ${cores.marromClaro};
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  margin-bottom: 24px;
`

export const Button = styled.button`
  width: 100%;
  background-color: ${cores.marromClaro};
  font-size: 14px;
  border: none;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  color: ${cores.laranja};
  padding: 4px 0;
  margin-top: 16px;
  cursor: pointer;
`

export const ContainerInput = styled.div`
  width: 100%;
`

export const Label = styled.label`
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: left;
  color: ${cores.marromClaro};
`

export const Input = styled.input`
  width: 100%;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: left;
  color: ${cores.cinza};
  margin: 8px 0px;
  border: none;
  padding: 4px;
  background-color: ${cores.marromClaro};
  outline: none;
`

export const InputGroup = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 32px;
`

export const InputGroup3 = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 32px;
`
