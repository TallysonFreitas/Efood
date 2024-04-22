import { Link } from 'react-router-dom'

import * as S from './style'

import Star from '../../assets/images/star.png'

export type Props = {
  name: string
  description: string
  id: number
  tags: string[]
  rating: number
  image: string
}

const StoreItem = ({ name, description, id, tags, image }: Props) => (
  <S.Card>
    <S.Image style={{ backgroundImage: `url(${image})` }} />
    <S.Texts>
      <S.Name>{name}</S.Name>
      <S.Description>{description}</S.Description>
      <Link to={`perfil/${id}`}>
        <S.Tag size="large">Saiba mais</S.Tag>
      </Link>
      <S.Rating>
        4.9 <img src={Star} alt="star" />
      </S.Rating>
    </S.Texts>
    <S.Emphasis>
      {tags.map((each) => (
        <S.Tag size="small" key={each}>
          {each}
        </S.Tag>
      ))}
    </S.Emphasis>
  </S.Card>
)

export default StoreItem
