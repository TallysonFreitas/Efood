import {
  Card,
  Container,
  Descricao,
  Imagem,
  Textos,
  Titulo,
  Button,
  Close
} from './style'
import CloseImg from '../../assets/images/close.png'

const Modal = ({ visivel, fechar }: { visivel: boolean; fechar: any }) => {
  return (
    <Container visivel={visivel}>
      <div className="container">
        <Card>
          <Imagem />
          <Textos>
            <Titulo>Pizza Marguerita</Titulo>
            <Descricao>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião.
            </Descricao>
            <Descricao>Serve: de 2 a 3 pessoas</Descricao>
            <Button>Adicionar ao carrinho - 69,90</Button>
          </Textos>
          <Close onClick={fechar}>
            <img src={CloseImg} alt="fechar" />
          </Close>
        </Card>
      </div>
    </Container>
  )
}

export default Modal
