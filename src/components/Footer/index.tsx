import { Logo } from '../../styles'

import * as S from './style'

import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import LogoImg from '../../assets/images/logo.png'

const Footer = () => (
  <S.Container>
    <div className="container">
      <Logo src={LogoImg} />
      <S.SocialLinks>
        <S.SocialItem>
          <a href="#">
            <img src={instagram} alt="" />
          </a>
        </S.SocialItem>
        <S.SocialItem>
          <a href="#">
            <img src={facebook} alt="" />
          </a>
        </S.SocialItem>
        <S.SocialItem>
          <a href="#">
            <img src={twitter} alt="" />
          </a>
        </S.SocialItem>
      </S.SocialLinks>
      <S.Text>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </S.Text>
    </div>
  </S.Container>
)

export default Footer
