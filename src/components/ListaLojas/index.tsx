import * as S from './style'
import LojaItem from '../Loja'
import { RestauranteType } from '../../pages/Home'

const ListaLoja = ({ lojas }: { lojas: RestauranteType[] }) => {
  function criaTags(destaque: boolean, tipo: string) {
    if (destaque === true) {
      return ['Destaque da semana', tipo]
    }
    return [tipo]
  }

  return (
    <S.Container>
      <div className="container">
        {lojas.map((each) => (
          <LojaItem
            descricao={each.descricao}
            imagem={each.capa}
            id={each.id}
            nome={each.titulo}
            nota={each.avaliacao}
            tags={criaTags(each.destacado, each.tipo)}
            key={each.id}
          />
        ))}
      </div>
    </S.Container>
  )
}

export default ListaLoja
