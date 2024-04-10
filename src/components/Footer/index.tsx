import { Container, SocialItem, SocialLinks, Texto } from './style'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import LogoImg from '../../assets/images/logo.png'
import { Logo } from '../../styles'

const Footer = () => (
  <Container>
    <div className="container">
      <Logo src={LogoImg} />
      <SocialLinks>
        <SocialItem>
          <a href="#">
            <img src={instagram} alt="" />
          </a>
        </SocialItem>
        <SocialItem>
          <a href="#">
            <img src={facebook} alt="" />
          </a>
        </SocialItem>
        <SocialItem>
          <a href="#">
            <img src={twitter} alt="" />
          </a>
        </SocialItem>
      </SocialLinks>
      <Texto>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Texto>
    </div>
  </Container>
)

export default Footer
