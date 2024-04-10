import Banner from '../../components/Banner'
import Header from '../../components/Header'
import BannerImg from '../../assets/images/dolce.png'
import ListaPratos from '../../components/ListaPratos'
import { PratoType } from '../../models/Prato'
import Margerita from '../../assets/images/pizza-marguerita.png'

const Pratos: PratoType[] = [
  {
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    titulo: 'Pizza Marguerita',
    imagem: Margerita
  },
  {
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    titulo: 'Pizza Marguerita',
    imagem: Margerita
  },
  {
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    titulo: 'Pizza Marguerita',
    imagem: Margerita
  },
  {
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    titulo: 'Pizza Marguerita',
    imagem: Margerita
  },
  {
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    titulo: 'Pizza Marguerita',
    imagem: Margerita
  },
  {
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    titulo: 'Pizza Marguerita',
    imagem: Margerita
  }
]

const Perfil = () => (
  <>
    <Header type="nav" />
    <Banner
      imagem={BannerImg}
      tag="Italiana"
      titulo="La Dolce Vita Trattoria"
    />
    <ListaPratos pratos={Pratos} />
  </>
)

export default Perfil
