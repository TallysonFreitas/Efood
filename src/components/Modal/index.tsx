import * as S from './style'
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
    <S.Container visivel={visivel}>
      <div className="container-l">
        <S.Card>
          <S.Imagem imagem={imagem} />
          <S.Textos>
            <S.Titulo>{titulo}</S.Titulo>
            <S.Descricao>{descricao}</S.Descricao>
            <S.Descricao>Serve: de 2 a 3 pessoas</S.Descricao>
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
              Adicionar ao carrinho -{' '}
              {valor.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
            </S.Button>
          </S.Textos>
          <S.Close onClick={fechar}>
            <img src={CloseImg} alt="fechar" />
          </S.Close>
        </S.Card>
      </div>
    </S.Container>
  )
}

export default Modal
