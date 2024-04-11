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
import { useDispatch } from 'react-redux'
import { adicionaPrato } from '../../store/Reducers/PratosReducer'

type Props = {
  visivel: boolean
  fechar: any
  imagem: string
  titulo: string
  descricao: string
  valor: number
  id: number
}

const Modal = ({
  visivel,
  fechar,
  imagem,
  titulo,
  descricao,
  valor,
  id
}: Props) => {
  const dispatch = useDispatch()

  return (
    <Container visivel={visivel}>
      <div className="container-l">
        <Card>
          <Imagem imagem={imagem} />
          <Textos>
            <Titulo>{titulo}</Titulo>
            <Descricao>{descricao}</Descricao>
            <Descricao>Serve: de 2 a 3 pessoas</Descricao>
            <Button
              onClick={() => {
                dispatch(
                  adicionaPrato({
                    descricao: descricao,
                    imagem: imagem,
                    valor: valor,
                    titulo: titulo,
                    id: id
                  }),
                  fechar()
                )
              }}
            >
              Adicionar ao carrinho -{' '}
              {valor.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
            </Button>
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
