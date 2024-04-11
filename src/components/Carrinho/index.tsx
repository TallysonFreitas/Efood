import { useSelector } from 'react-redux'
import { Card, Container } from './style'
import { RootReducer } from '../../store'
import CarrinhoItem from '../CarrinhoItem'

const Carrinho = ({ visivel }: { visivel: boolean }) => {
  const { pedidos } = useSelector((state: RootReducer) => {
    return state.pedidos
  })

  return (
    <Container visivel={visivel}>
      <Card>
        {pedidos.map((each) => {
          return (
            <CarrinhoItem
              descricao={each.descricao}
              imagem={each.imagem}
              preco={each.valor}
              titulo={each.titulo}
              key={each.id}
              id={each.id}
            />
          )
        })}
      </Card>
    </Container>
  )
}

export default Carrinho
