import { Logo } from '../../styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Link } from 'react-router-dom'

import * as S from './style'

import LogoImg from '../../assets/images/logo.png'
import Background from '../../assets/images/background-header.png'

type Props = {
  type: 'home' | 'nav'
  title?: string
  showCarrinho?: () => void
}

const Header = ({ type, title, showCarrinho }: Props) => {
  const { orders } = useSelector((state: RootReducer) => {
    return state.orders
  })

  return (
    <S.ContainerHeader image={Background} type={type}>
      <div className="container">
        {type == 'nav' ? (
          <>
            <S.TextLink to={'/'}>Restaurantes</S.TextLink>
            <h1>
              <Link to={'/'}>
                <Logo src={LogoImg} alt="Efood" />
              </Link>
            </h1>
            <S.Text onClick={showCarrinho}>
              {orders.length} produto(s) no carrinho
            </S.Text>
          </>
        ) : (
          <>
            <h1>
              <Link to={'/'}>
                <Logo src={LogoImg} alt="Efood" />
              </Link>
            </h1>
            <S.Title>{title}</S.Title>
          </>
        )}
      </div>
    </S.ContainerHeader>
  )
}

export default Header
