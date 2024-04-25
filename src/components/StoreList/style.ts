import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.div`
  padding: 80px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 16px;
  }

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex-direction: row;
    gap: 48px 80px;

    @media (max-width: ${breakpoints.tablet}) {
      grid-template-columns: 1fr;
    }
  }
`
