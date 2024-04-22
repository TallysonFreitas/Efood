import * as S from './style'
import DeleteImg from '../../assets/images/delete.png'
import { useDispatch } from 'react-redux'
import { removePlate } from '../../store/Reducers/PratosReducer'
import { formataValorReal } from '../Modal'

type Props = {
  image: string
  title: string
  price: number
  description: string
  id: number
}

const CartItem = ({ image, title, price, description, id }: Props) => {
  const dispatch = useDispatch()

  return (
    <S.CartItem>
      <S.Image image={image} title={description} />
      <div>
        <S.Title>{title}</S.Title>
        <S.Price>{formataValorReal(price)}</S.Price>
      </div>
      <S.Delete
        onClick={() => {
          dispatch(removePlate(id))
        }}
      >
        <img src={DeleteImg} alt="delete" />
      </S.Delete>
    </S.CartItem>
  )
}

export default CartItem
