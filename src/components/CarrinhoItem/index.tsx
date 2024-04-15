import * as S from './style'
import DeleteImg from '../../assets/images/delete.png'
import { useDispatch } from 'react-redux'
import { removePrato } from '../../store/Reducers/PratosReducer'
import { formataValorReal } from '../Modal'

type Props = {
  imagem: string
  titulo: string
  preco: number
  descricao: string
  id: number
}

const CarrinhoItem = ({ imagem, titulo, preco, descricao, id }: Props) => {
  const dispatch = useDispatch()

  return (
    <S.ItemCarrinho>
      <S.Imagem imagem={imagem} title={descricao} />
      <div>
        <S.Titulo>{titulo}</S.Titulo>
        <S.Preco>{formataValorReal(preco)}</S.Preco>
      </div>
      <S.Delete
        onClick={() => {
          dispatch(removePrato(id))
        }}
      >
        <img src={DeleteImg} alt="delete" />
      </S.Delete>
    </S.ItemCarrinho>
  )
}

export default CarrinhoItem
