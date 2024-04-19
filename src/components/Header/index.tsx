import * as S from './style'
import LogoImg from '../../assets/images/logo.png'
import Background from '../../assets/images/background-header.png'
import { Logo } from '../../styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Link } from 'react-router-dom'

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
    <S.ContainerHeader image={Background} type={type}>
      <div className="container">
        {type == 'nav' ? (
          <>
            <S.TextoLink to={'/'}>Restaurantes</S.TextoLink>
            <h1>
              <Link to={'/'}>
                <Logo src={LogoImg} alt="Efood" />
              </Link>
            </h1>
            <S.Texto onClick={showCarrinho}>
              {pedidos.length} produto(s) no carrinho
            </S.Texto>
          </>
        ) : (
          <>
            <h1>
              <Link to={'/'}>
                <Logo src={LogoImg} alt="Efood" />
              </Link>
            </h1>
            <S.Titulo>{titulo}</S.Titulo>
          </>
        )}
      </div>
    </S.ContainerHeader>
  )
}

export default Header
