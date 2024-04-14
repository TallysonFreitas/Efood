import { PratoType } from '../../models/Prato'
import Prato from '../Prato'
import * as S from './style'

type Props = {
  pratos: PratoType[]
}
const ListaPratos = ({ pratos }: Props) => (
  <S.Container>
    <div className="container">
      {pratos.map((each) => (
        <Prato
          descricao={each.descricao}
          imagem={each.imagem}
          titulo={each.titulo}
          key={each.id}
          valor={each.valor}
          id={each.id}
        />
      ))}
    </div>
  </S.Container>
)

export default ListaPratos
