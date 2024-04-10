import { Container } from './style'
import { Loja } from '../../models/Loja'
import LojaItem from '../Loja'

const ListaLoja = ({ lojas }: { lojas: Loja[] }) => (
  <Container>
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
  </Container>
)

export default ListaLoja
