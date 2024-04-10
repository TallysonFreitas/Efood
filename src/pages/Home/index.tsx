import Header from '../../components/Header'
import Menu from '../../components/Menu'
import { GlobalStyle } from '../../styles'
import { Prato } from '../../models/Prato'
import Sushi from '../../assets/images/Sushi.png'
import Dolce from '../../assets/images/dolce.png'

const Recomendacoes: Prato[] = [
  {
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    imagem: Sushi,
    link: '/',
    nome: 'Hioki Sushi',
    nota: 4.9,
    tags: ['Destaque da semana', 'Japonesa']
  },
  {
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: Dolce,
    link: '/',
    nome: 'La Dolce Vita Trattoria',
    nota: 4.6,
    tags: ['Italiana']
  },
  {
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: Dolce,
    link: '/',
    nome: 'La Dolce Vita Trattoria',
    nota: 4.6,
    tags: ['Italiana']
  },
  {
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: Dolce,
    link: '/',
    nome: 'La Dolce Vita Trattoria',
    nota: 4.6,
    tags: ['Italiana']
  },
  {
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: Dolce,
    link: '/',
    nome: 'La Dolce Vita Trattoria',
    nota: 4.6,
    tags: ['Italiana']
  },
  {
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: Dolce,
    link: '/',
    nome: 'La Dolce Vita Trattoria',
    nota: 4.6,
    tags: ['Italiana']
  }
]

const Home = () => (
  <>
    <GlobalStyle />
    <Header
      type="home"
      titulo="Viva experiências gastronômicas no conforto da sua casa"
    />
    <Menu pratos={Recomendacoes} />
  </>
)

export default Home
