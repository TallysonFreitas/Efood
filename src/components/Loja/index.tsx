import * as S from './style'
import Star from '../../assets/images/star.png'
import { Link } from 'react-router-dom'

export type Props = {
  nome: string
  descricao: string
  link: string
  tags: string[]
  nota: number
  imagem: string
}

const Loja = ({ nome, descricao, link, tags, imagem }: Props) => (
  <S.Card>
    <S.Imagem src={imagem} alt="Sushi" />
    <S.Textos>
      <S.Nome>{nome}</S.Nome>
      <S.Descricao>{descricao}</S.Descricao>
      <Link to={link}>
        <S.Tag size="large">Saiba mais</S.Tag>
      </Link>
      <S.Nota>
        4.9 <img src={Star} alt="star" />
      </S.Nota>
    </S.Textos>
    <S.Destaques>
      {tags.map((each) => (
        <S.Tag size="small" key={each}>
          {each}
        </S.Tag>
      ))}
    </S.Destaques>
  </S.Card>
)

export default Loja
