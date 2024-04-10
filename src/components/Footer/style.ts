import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  padding: 40px;
  background-color: ${cores.marromClaro};

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const SocialLinks = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin: 32px 0px 80px 0px;
`

export const SocialItem = styled.li`
  width: 24px;
  height: 24px;

  img {
    width: 24px;
    height: 24px;
  }
`

export const Texto = styled.p`
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  text-align: center;
  color: ${cores.laranja};
  max-width: 480px;
`
