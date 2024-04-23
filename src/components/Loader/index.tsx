import { ClockLoader } from 'react-spinners'
import { Container } from './style'
import { cores } from '../../styles'

const Loader = () => {
  return (
    <Container>
      <ClockLoader color={cores.laranja} />
    </Container>
  )
}
export default Loader
