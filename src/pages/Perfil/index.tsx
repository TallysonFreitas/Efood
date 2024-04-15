import Banner from '../../components/Banner'
import Header from '../../components/Header'
import ListaPratos from '../../components/ListaPratos'
import Carrinho from '../../components/Carrinho'
import { useEffect, useState } from 'react'
import { RestauranteType } from '../Home'
import { useParams } from 'react-router-dom'

const Perfil = () => {
  const [carrinhoVisivel, setCarrinhoVisivel] = useState(false)
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<RestauranteType>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setRestaurante(json)
      })
  }, [id])

  if (!restaurante) {
    return <h3>carregando...</h3>
  }

  return (
    <>
      <Header
        type="nav"
        showCarrinho={() => {
          setCarrinhoVisivel(!carrinhoVisivel)
        }}
      />
      <Banner
        imagem={restaurante.capa}
        tag={restaurante.tipo}
        titulo={restaurante.titulo}
      />
      <ListaPratos pratos={restaurante?.cardapio} />
      <Carrinho
        visivel={carrinhoVisivel}
        fechar={() => {
          setCarrinhoVisivel(!carrinhoVisivel)
        }}
      />
    </>
  )
}

export default Perfil
