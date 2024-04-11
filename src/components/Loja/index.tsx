import {
  Card,
  Descricao,
  Destaques,
  Imagem,
  Nome,
  Nota,
  Tag,
  Textos
} from './style'
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
  <Card>
    <Imagem src={imagem} alt="Sushi" />
    <Textos>
      <Nome>{nome}</Nome>
      <Descricao>{descricao}</Descricao>
      <Link to={link}>
        <Tag size="large">Saiba mais</Tag>
      </Link>
      <Nota>
        4.9 <img src={Star} alt="star" />
      </Nota>
    </Textos>
    <Destaques>
      {tags.map((each) => (
        <Tag size="small" key={each}>
          {each}
        </Tag>
      ))}
    </Destaques>
  </Card>
)

export default Loja
