import * as S from './style'
import CloseImg from '../../assets/images/close.png'
import { useDispatch } from 'react-redux'
import { adicionaPrato } from '../../store/Reducers/PratosReducer'

type Props = {
  visivel: boolean
  fechar: () => void
  imagem: string
  titulo: string
  descricao: string
  valor: number
  id: number
  porcao: string
}

export const formataValorReal = (e = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(e)
}

const Modal = ({
  visivel,
  fechar,
  imagem,
  titulo,
  descricao,
  valor,
  porcao,
  id
}: Props) => {
  const dispatch = useDispatch()

  return (
    <S.Container visivel={visivel}>
      <div className="container-l">
        <S.Card>
          <S.Imagem imagem={imagem} />
          <S.Textos>
            <S.Titulo>{titulo}</S.Titulo>
            <S.Descricao>{descricao}</S.Descricao>
            <S.Descricao>Serve: de {porcao}</S.Descricao>
            <S.Button
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
              Adicionar ao carrinho - {formataValorReal(valor)}
            </S.Button>
          </S.Textos>
          <S.Close onClick={fechar}>
            <img src={CloseImg} alt="fechar" />
          </S.Close>
        </S.Card>
      </div>
      <div
        className="overlay"
        onClick={() => {
          fechar()
        }}
      ></div>
    </S.Container>
  )
}

export default Modal
