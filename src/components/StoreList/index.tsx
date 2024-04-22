import StoreItem from '../StoreItem'

import { RestauranteType } from '../../pages/Home'

import * as S from './style'

const StoreList = ({ store }: { store: RestauranteType[] }) => {
  function criaTags(emphasis: boolean, tipo: string) {
    if (emphasis === true) {
      return ['Destaque da semana', tipo]
    }
    return [tipo]
  }

  return (
    <S.Container>
      <div className="container">
        {store.map((each) => (
          <StoreItem
            description={each.descricao}
            image={each.capa}
            id={each.id}
            name={each.titulo}
            rating={each.avaliacao}
            tags={criaTags(each.destacado, each.tipo)}
            key={each.id}
          />
        ))}
      </div>
    </S.Container>
  )
}

export default StoreList
