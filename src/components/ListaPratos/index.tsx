import { PratoType } from '../../models/Prato'
import Prato from '../Prato'
import { Container } from './style'

type Props = {
  pratos: PratoType[]
}
const ListaPratos = ({ pratos }: Props) => (
  <Container>
    <div className="container">
      {pratos.map((each) => (
        <Prato
          descricao={each.descricao}
          imagem={each.imagem}
          titulo={each.titulo}
          key={each.titulo}
        />
      ))}
    </div>
  </Container>
)

export default ListaPratos
