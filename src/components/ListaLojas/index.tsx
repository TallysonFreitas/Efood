import * as S from './style'
import { Loja } from '../../models/Loja'
import LojaItem from '../Loja'

const ListaLoja = ({ lojas }: { lojas: Loja[] }) => (
  <S.Container>
    <div className="container">
      {lojas.map((each) => (
        <LojaItem
          descricao={each.descricao}
          imagem={each.imagem}
          link={each.link}
          nome={each.nome}
          nota={each.nota}
          tags={each.tags}
          key={each.nome}
        />
      ))}
    </div>
  </S.Container>
)

export default ListaLoja
