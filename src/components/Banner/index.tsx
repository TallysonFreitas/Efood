import * as S from './style'

type BannerType = {
  imagem: string
  titulo: string
  tag: string
}

const Banner = ({ imagem, titulo, tag }: BannerType) => (
  <S.Imagem imagem={imagem}>
    <div className="container">
      <S.Tag>{tag}</S.Tag>
      <S.Titulo>{titulo}</S.Titulo>
    </div>
    <S.Filtro />
  </S.Imagem>
)

export default Banner
