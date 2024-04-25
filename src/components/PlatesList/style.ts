import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.div`
  padding: 40px 0px 120px;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;

    @media (max-width: ${breakpoints.desktop}) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: ${breakpoints.tablet}) {
      grid-template-columns: 1fr;
    }
  }
`
