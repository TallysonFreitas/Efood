import { ContainerHeader, Texto, Titulo } from './style'
import LogoImg from '../../assets/images/logo.png'
import Background from '../../assets/images/background-header.png'
import { Logo } from '../../styles'

type Props = {
  type: 'home' | 'nav'
  titulo?: string
}

const Header = ({ type, titulo }: Props) => (
  <ContainerHeader image={Background} type={type}>
    <div className="container">
      {type == 'nav' ? (
        <>
          <Texto>Restaurantes</Texto>
          <Logo src={LogoImg} alt="Efood" />
          <Texto>0 produto(s) no carrinho</Texto>
        </>
      ) : (
        <>
          <Logo src={LogoImg} alt="Efood" />
          <Titulo>{titulo}</Titulo>
        </>
      )}
    </div>
  </ContainerHeader>
)

export default Header
