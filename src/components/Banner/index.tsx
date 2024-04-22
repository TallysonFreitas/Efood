import * as S from './style'

type BannerType = {
  image: string
  title: string
  tag: string
}

const Banner = ({ image, title, tag }: BannerType) => (
  <S.Image image={image}>
    <div className="container">
      <S.Tag>{tag}</S.Tag>
      <S.Title>{title}</S.Title>
    </div>
    <S.Filtro />
  </S.Image>
)

export default Banner
