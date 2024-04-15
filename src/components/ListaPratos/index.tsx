import { CardapioType } from '../../pages/Home'
import Prato from '../Prato'
import * as S from './style'

type Props = {
  pratos: CardapioType[]
}

const ListaPratos = ({ pratos }: Props) => {
  return (
    <S.Container>
      <div className="container">
        {pratos.map((each) => (
          <Prato
            porcao={each.porcao}
            descricao={each.descricao}
            imagem={each.foto}
            titulo={each.nome}
            key={each.id}
            valor={each.preco}
            id={each.id}
          />
        ))}
      </div>
    </S.Container>
  )
}

export default ListaPratos
