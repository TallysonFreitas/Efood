import { Filtro, Imagem, Tag, Titulo } from './style'

type BannerType = {
  imagem: string
  titulo: string
  tag: string
}

const Banner = ({ imagem, titulo, tag }: BannerType) => (
  <Imagem imagem={imagem}>
    <div className="container">
      <Tag>{tag}</Tag>
      <Titulo>{titulo}</Titulo>
    </div>
    <Filtro />
  </Imagem>
)

export default Banner
