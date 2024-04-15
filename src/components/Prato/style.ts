import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  padding: 8px;
  background-color: ${cores.laranja};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Imagem = styled.img`
  width: 100%;
  margin-bottom: 8px;
  height: 100%;
  max-height: 166px;
  object-fit: cover;
`

export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: 900;
  line-height: 18px;
  text-align: left;
  color: ${cores.marromClaro};
  margin-bottom: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  color: ${cores.marromClaro};
`

export const Button = styled.button`
  width: 100%;
  height: 24px;
  background-color: ${cores.marromClaro};
  color: ${cores.laranja};
  text-decoration: none;
  padding: 4px 0px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  text-align: center;
  display: block;
  border: none;
  cursor: pointer;
`
