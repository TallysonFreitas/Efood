import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
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

export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  text-align: left;
  color: ${cores.marromClaro};
  margin-bottom: 16px;
`

export const InputGroup3 = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 32px;
`
