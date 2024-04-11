import { Delete, Imagem, ItemCarrinho, Preco, Titulo } from './style'
import DeleteImg from '../../assets/images/delete.png'
import { useDispatch } from 'react-redux'
import { removePrato } from '../../store/Reducers/PratosReducer'

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
    <ItemCarrinho>
      <Imagem imagem={imagem} title={descricao} />
      <div>
        <Titulo>{titulo}</Titulo>
        <Preco>
          {preco.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
          })}
        </Preco>
      </div>
      <Delete
        onClick={() => {
          dispatch(removePrato(id))
        }}
      >
        <img src={DeleteImg} alt="delete" />
      </Delete>
    </ItemCarrinho>
  )
}

export default CarrinhoItem
