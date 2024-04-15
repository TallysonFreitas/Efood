import * as S from './style'
import Star from '../../assets/images/star.png'
import { Link } from 'react-router-dom'

export type Props = {
  nome: string
  descricao: string
  id: number
  tags: string[]
  nota: number
  imagem: string
}

const Loja = ({ nome, descricao, id, tags, imagem }: Props) => (
  <S.Card>
    <S.Imagem style={{ backgroundImage: `url(${imagem})` }} />
    <S.Textos>
      <S.Nome>{nome}</S.Nome>
      <S.Descricao>{descricao}</S.Descricao>
      <Link to={`perfil/${id}`}>
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
