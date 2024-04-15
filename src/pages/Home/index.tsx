import Header from '../../components/Header'
import ListaLoja from '../../components/ListaLojas'
import { useEffect, useState } from 'react'

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
  const [restaurantes, setRestaurantes] = useState<RestauranteType[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((response) => response.json())
      .then((json) => setRestaurantes(json))
  }, [])

  return (
    <>
      <Header
        type="home"
        titulo="Viva experiências gastronômicas no conforto da sua casa"
      />
      <ListaLoja lojas={restaurantes} />
    </>
  )
}

export default Home
