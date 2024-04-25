import { Logo } from '../../styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Link } from 'react-router-dom'

import * as S from './style'

import logoImg from '../../assets/images/logo.png'
import background from '../../assets/images/background-header.png'

type Props = {
  type: 'home' | 'nav'
  title?: string
  showCarrinho?: () => void
}

const Header = ({ type, title, showCarrinho }: Props) => {
  const { orders } = useSelector((state: RootReducer) => {
    return state.orders
  })

  const screenWidth = window.screen.width

  return (
    <S.ContainerHeader image={background} type={type}>
      <div className="container">
        {type == 'nav' ? (
          <>
            <S.TextLink to={'/'}>
              {screenWidth >= 768 ? 'Restaurantes' : '<'}
            </S.TextLink>
            <h1>
              <Link to={'/'}>
                <Logo src={logoImg} alt="Efood" />
              </Link>
            </h1>
            <S.Text onClick={showCarrinho}>
              {orders.length}{' '}
              {screenWidth >= 768 ? 'produto(s) no carrinho' : 'produto(s)'}
            </S.Text>
          </>
        ) : (
          <>
            <h1>
              <Link to={'/'}>
                <Logo src={logoImg} alt="Efood" />
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
