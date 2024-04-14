import { useSelector } from 'react-redux'
import * as S from './style'
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
    <S.Container visivel={visivel}>
      <S.Card>
        <S.Close onClick={fechar}>
          <img src={CloseImg} alt="close" />
        </S.Close>
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
            <S.TotalPedidos>
              <S.Texto>Valor Total</S.Texto>
              <S.Texto>
                {ValorTotal.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL'
                })}
              </S.Texto>
            </S.TotalPedidos>
            <S.Entrega
              onClick={() => {
                setEtapa('entrega')
              }}
            >
              Continuar com a entrega
            </S.Entrega>
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
            <S.Titulo>Pedido realizado - ORDER_ID</S.Titulo>
            <S.Info>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </S.Info>
            <S.Info>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </S.Info>
            <S.Info>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </S.Info>
            <S.Info>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </S.Info>
            <S.Button
              onClick={() => {
                fechar()
              }}
            >
              Concluir
            </S.Button>
          </>
        )}
      </S.Card>
    </S.Container>
  )
}

export default Carrinho
