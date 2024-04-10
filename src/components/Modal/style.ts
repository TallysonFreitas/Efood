import styled from 'styled-components'
import { cores } from '../../styles'

type Props = {
  visivel: boolean
}

export const Container = styled.div<Props>`
  position: fixed;
  display: ${(props) => (props.visivel === true ? '' : 'none')};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
  }
`

export const Card = styled.div`
  background-color: ${cores.laranja};
  width: 100%;
  padding: 32px;
  display: grid;
  position: relative;
  gap: 24px;
  grid-template-columns: 280px auto;
  color: ${cores.marromClaro};
`

export const Imagem = styled.div`
  width: 280px;
  height: 280px;
  background-image: url(https://placehold.co/280x280);
`

export const Textos = styled.div``

export const Titulo = styled.h4`
  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
  text-align: left;
  margin-bottom: 16px;
`

export const Descricao = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  margin-bottom: 16px;
`

export const Button = styled.button`
  padding: 4px 8px;
  height: 24px;
  background-color: ${cores.marromClaro};
  color: ${cores.laranja};
  text-decoration: none;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  text-align: center;
  display: block;
  border: none;
  cursor: pointer;
`

export const Close = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 16px;
  height: 16px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`
