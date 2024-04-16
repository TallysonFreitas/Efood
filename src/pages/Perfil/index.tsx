import Banner from '../../components/Banner'
import Header from '../../components/Header'
import ListaPratos from '../../components/ListaPratos'
import Carrinho from '../../components/Carrinho'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetPratosQuery } from '../../services/api'

const Perfil = () => {
  const [carrinhoVisivel, setCarrinhoVisivel] = useState(false)
  const { id } = useParams()
  const { data } = useGetPratosQuery(id!)

  if (!data) {
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
      <Banner imagem={data.capa} tag={data.tipo} titulo={data.titulo} />
      <ListaPratos pratos={data?.cardapio} />
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
