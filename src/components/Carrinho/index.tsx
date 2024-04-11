import { useSelector } from 'react-redux'
import {
  Button,
  Card,
  Close,
  Container,
  Entrega,
  Info,
  Texto,
  Titulo,
  TotalPedidos
} from './style'
import { RootReducer } from '../../store'
import CarrinhoItem from '../CarrinhoItem'
import CloseImg from '../../assets/images/close.png'
import { useState } from 'react'
import Form from '../Form'

const Carrinho = ({
  visivel,
  fechar
}: {
  visivel: boolean
  fechar: () => void
}) => {
  const { pedidos } = useSelector((state: RootReducer) => {
    return state.pedidos
  })

  const ValorTotal = pedidos.reduce(
    (acumulador, each) => acumulador + each.valor,
    0
  )

  const [etapa, setEtapa] = useState('carrinho')

  function carrinho() {
    setEtapa('carrinho')
  }

  function pagamento() {
    setEtapa('pagamento')
  }

  function entrega() {
    setEtapa('entrega')
  }

  function fim() {
    setEtapa('fim')
  }

  return (
    <Container visivel={visivel}>
      <Card>
        <Close onClick={fechar}>
          <img src={CloseImg} alt="close" />
        </Close>
        {/* Carrinho */}
        {etapa === 'carrinho' && (
          <>
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
            <TotalPedidos>
              <Texto>Valor Total</Texto>
              <Texto>
                {ValorTotal.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL'
                })}
              </Texto>
            </TotalPedidos>
            <Entrega
              onClick={() => {
                setEtapa('entrega')
              }}
            >
              Continuar com a entrega
            </Entrega>
          </>
        )}
        {/* Entrega */}
        {etapa === 'entrega' && (
          <>
            <Form type="entrega" voltar={carrinho} continuar={pagamento} />
          </>
        )}
        {/* Pagamento */}
        {etapa === 'pagamento' && (
          <>
            <Form type="pagamento" voltar={entrega} continuar={fim} />
          </>
        )}
        {/* Fim */}
        {etapa === 'fim' && (
          <>
            <Titulo>Pedido realizado - ORDER_ID</Titulo>
            <Info>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </Info>
            <Info>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </Info>
            <Info>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </Info>
            <Info>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </Info>
            <Button
              onClick={() => {
                fechar()
              }}
            >
              Concluir
            </Button>
          </>
        )}
      </Card>
    </Container>
  )
}

export default Carrinho
