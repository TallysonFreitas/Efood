import ItemSaibaMais from '../ItemSaibaMais'
import { Container } from './style'
import { Prato } from '../../models/Prato'

const Menu = ({ pratos }: { pratos: Prato[] }) => (
  <Container>
    <div className="container">
      {pratos.map((each) => (
        <ItemSaibaMais
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
  </Container>
)

export default Menu
