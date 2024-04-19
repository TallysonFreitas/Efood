import { useSelector } from 'react-redux'
import * as S from './style'
import { RootReducer } from '../../store'
import CarrinhoItem from '../CarrinhoItem'
import CloseImg from '../../assets/images/close.png'
import { useState } from 'react'
import Form from '../Form'
import { formataValorReal } from '../Modal'

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
      <div
        className="overlay"
        onClick={() => {
          fechar()
        }}
      ></div>
      <S.ContainCard>
        <S.Card>
          {pedidos.length > 0 ? (
            <>
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
                    <S.Texto>{formataValorReal(ValorTotal)}</S.Texto>
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
                  <Form
                    type="entrega"
                    voltar={carrinho}
                    continuar={pagamento}
                  />
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
                    Estamos felizes em informar que seu pedido já está em
                    processo de preparação e, em breve, será entregue no
                    endereço fornecido.
                  </S.Info>
                  <S.Info>
                    Gostaríamos de ressaltar que nossos entregadores não estão
                    autorizados a realizar cobranças extras.
                  </S.Info>
                  <S.Info>
                    Lembre-se da importância de higienizar as mãos após o
                    recebimento do pedido, garantindo assim sua segurança e
                    bem-estar durante a refeição.
                  </S.Info>
                  <S.Info>
                    Esperamos que desfrute de uma deliciosa e agradável
                    experiência gastronômica. Bom apetite!
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
            </>
          ) : (
            <S.Texto className="text-center">
              Adicione algum prato para prosseguir para o pagamento
            </S.Texto>
          )}
        </S.Card>
      </S.ContainCard>
    </S.Container>
  )
}

export default Carrinho
