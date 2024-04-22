import Header from '../../components/Header'
import StoreList from '../../components/StoreList'
import { useGetRestaurantesQuery } from '../../services/api'

export type CardapioType = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type RestauranteType = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: CardapioType[]
}

const Home = () => {
  const { data } = useGetRestaurantesQuery()

  if (data) {
    return (
      <>
        <Header
          type="home"
          title="Viva experiências gastronômicas no conforto da sua casa"
        />
        <StoreList store={data} />
      </>
    )
  }
  return <h3>carregando</h3>
}

export default Home
