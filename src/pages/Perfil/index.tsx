import { useState } from 'react'

import Banner from '../../components/Banner'
import Header from '../../components/Header'
import PlatesList from '../../components/PlatesList'
import Cart from '../../components/Cart'
import Loader from '../../components/Loader'

import { useParams } from 'react-router-dom'
import { useGetPratosQuery } from '../../services/api'

const Perfil = () => {
  const [cartVisible, setCartVisible] = useState(false)
  const { id } = useParams()
  const { data } = useGetPratosQuery(id!)

  if (!data) {
    return <Loader />
  }

  return (
    <>
      <Header
        type="nav"
        showCarrinho={() => {
          setCartVisible(!cartVisible)
        }}
      />
      <Banner image={data.capa} tag={data.tipo} title={data.titulo} />
      <PlatesList plates={data?.cardapio} />
      <Cart
        visible={cartVisible}
        close={() => {
          setCartVisible(!cartVisible)
        }}
      />
    </>
  )
}

export default Perfil
