import { ButtonLink, Card, Descricao, Imagem, Titulo } from './style'
import Marguerita from '../../assets/images/pizza-marguerita.png'

const Prato = () => (
  <Card>
    <Imagem src={Marguerita} />
    <Titulo>Pizza Marguerita</Titulo>
    <Descricao>
      A clássica Marguerita: molho de tomate suculento, mussarela derretida,
      manjericão fresco e um toque de azeite. Sabor e simplicidade!
    </Descricao>
    <ButtonLink href="#">Adicionar ao carrinho</ButtonLink>
  </Card>
)

export default Prato
