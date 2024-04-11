import { ContainerHeader, Texto, TextoLink, Titulo } from './style'
import LogoImg from '../../assets/images/logo.png'
import Background from '../../assets/images/background-header.png'
import { Logo } from '../../styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

type Props = {
  type: 'home' | 'nav'
  titulo?: string
  showCarrinho?: () => void
}

const Header = ({ type, titulo, showCarrinho }: Props) => {
  const { pedidos } = useSelector((state: RootReducer) => {
    return state.pedidos
  })

  return (
    <ContainerHeader image={Background} type={type}>
      <div className="container">
        {type == 'nav' ? (
          <>
            <TextoLink to={'/'}>Restaurantes</TextoLink>
            <Logo src={LogoImg} alt="Efood" />
            <Texto onClick={showCarrinho}>
              {pedidos.length} produto(s) no carrinho
            </Texto>
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
}

export default Header
