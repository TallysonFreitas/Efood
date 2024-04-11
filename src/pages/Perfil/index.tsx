import Banner from '../../components/Banner'
import Header from '../../components/Header'
import BannerImg from '../../assets/images/dolce.png'
import ListaPratos from '../../components/ListaPratos'
import { PratoType } from '../../models/Prato'
import Margerita from '../../assets/images/pizza-marguerita.png'
import Carrinho from '../../components/Carrinho'
import { useState } from 'react'

const Pratos: PratoType[] = [
  {
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    titulo: 'Pizza Marguerita',
    valor: 60.9,

    imagem: Margerita,
    id: 1
  },
  {
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    titulo: 'Pizza Marguerita',
    valor: 60.9,

    imagem: Margerita,
    id: 2
  },
  {
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    titulo: 'Pizza Marguerita',
    valor: 60.9,

    imagem: Margerita,
    id: 3
  },
  {
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    titulo: 'Pizza Marguerita',
    valor: 60.9,

    imagem: Margerita,
    id: 4
  },
  {
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    titulo: 'Pizza Marguerita',
    valor: 60.9,

    imagem: Margerita,
    id: 5
  },
  {
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    titulo: 'Pizza Marguerita',
    valor: 60.9,

    imagem: Margerita,
    id: 6
  }
]

const Perfil = () => {
  const [carrinhoVisivel, setCarrinhoVisivel] = useState(false)

  return (
    <>
      <Header
        type="nav"
        showCarrinho={() => {
          setCarrinhoVisivel(!carrinhoVisivel)
        }}
      />
      <Banner
        imagem={BannerImg}
        tag="Italiana"
        titulo="La Dolce Vita Trattoria"
      />
      <ListaPratos pratos={Pratos} />
      <Carrinho visivel={carrinhoVisivel} />
    </>
  )
}

export default Perfil
