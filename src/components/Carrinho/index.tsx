import { useSelector } from 'react-redux'
import * as S from './style'
import { RootReducer } from '../../store'
import CarrinhoItem from '../CarrinhoItem'
import CloseImg from '../../assets/images/close.png'
import { useState } from 'react'
import { formataValorReal } from '../Modal'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'

const Carrinho = ({
  visivel,
  fechar
}: {
  visivel: boolean
  fechar: () => void
}) => {
  const [etapa, setEtapa] = useState('carrinho')
  const { pedidos } = useSelector((state: RootReducer) => {
    return state.pedidos
  })

  const ValorTotal = pedidos.reduce(
    (acumulador, each) => acumulador + each.valor,
    0
  )

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

  const [purchase, { data, isLoading }] = usePurchaseMutation()

  const checkInputHasError = (fieldName: string) => {
    const isInvalid = fieldName in form.errors

    return isInvalid
  }

  const initialValuesFormik = {
    receiver: '',
    description: '',
    city: '',
    zipCode: '',
    number: '',
    complement: '',
    cardName: '',
    cardNumber: '',
    cardCode: '',
    expiresMonth: '',
    expiresYear: ''
  }

  const form = useFormik({
    initialValues: initialValuesFormik,
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'o campo precisa de pelo menos 5 caracteres')
        .required('O campo é obrigatorio'),
      description: Yup.string().required('O campo é obrigatorio'),
      city: Yup.string().required('O campo é obrigatorio'),
      zipCode: Yup.string().required('O campo é obrigatorio'),
      number: Yup.string().required('O campo é obrigatorio'),
      complement: Yup.string(),
      cardName: Yup.string().required('O campo é obrigatorio'),
      cardNumber: Yup.string().required('O campo é obrigatorio'),
      cardCode: Yup.string().required('O campo é obrigatorio'),
      expiresMonth: Yup.string().required('O campo é obrigatorio'),
      expiresYear: Yup.string().required('O campo é obrigatorio')
    }),
    onSubmit: (values) => {
      purchase({
        products: pedidos.map((each) => ({ id: each.id, price: each.valor })),
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.description,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
    }
  })

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
                  <S.Titulo>Entrega</S.Titulo>
                  <S.Label htmlFor="receiver">Quem irá receber</S.Label>
                  <S.Input
                    name="receiver"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    id="receiver"
                    value={form.values.receiver}
                  />
                  <S.Label htmlFor="description">Endereço</S.Label>
                  <S.Input
                    name="description"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    id="number"
                    value={form.values.description}
                  />
                  <S.Label htmlFor="city">Cidade</S.Label>
                  <S.Input
                    name="city"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    id="city"
                    value={form.values.city}
                  />
                  <S.InputGroup>
                    <S.ContainerInput>
                      <S.Label htmlFor="zipCode">CEP</S.Label>
                      <S.Input
                        type="text"
                        name="zipCode"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        id="zipCode"
                        value={form.values.zipCode}
                      />
                    </S.ContainerInput>
                    <S.ContainerInput>
                      <S.Label htmlFor="number">Número</S.Label>
                      <S.Input
                        name="number"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        id="number"
                        value={form.values.number}
                      />
                    </S.ContainerInput>
                  </S.InputGroup>
                  <S.Label htmlFor="complement">Complemento (opcional)</S.Label>
                  <S.Input
                    name="complement"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    id="complement"
                    value={form.values.complement}
                  />
                  <S.Button
                    onClick={() => {
                      if (
                        checkInputHasError('receiver') &&
                        checkInputHasError('city') &&
                        checkInputHasError('zipCode') &&
                        checkInputHasError('number')
                      ) {
                        console.log(form.errors)
                      } else {
                        pagamento()
                      }
                    }}
                  >
                    Continuar Pagamento
                  </S.Button>
                  <S.Button
                    onClick={() => {
                      carrinho()
                    }}
                  >
                    Voltar para o carrinho
                  </S.Button>
                </>
              )}
              {/* Pagamento */}
              {etapa === 'pagamento' && (
                <>
                  <S.Titulo>Pagamento - Valor a pagar</S.Titulo>
                  <S.Label htmlFor="cardName">Nome no cartão</S.Label>
                  <S.Input
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    id="cardName"
                    value={form.values.cardName}
                  />
                  <S.InputGroup3>
                    <div>
                      <S.Label htmlFor="cardNumber">Numero do cartão</S.Label>
                      <S.Input
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        id="cardNumber"
                        value={form.values.cardNumber}
                      />
                    </div>
                    <div>
                      <S.Label htmlFor="cardCode">CVV</S.Label>
                      <S.Input
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        id="cardCode"
                        value={form.values.cardCode}
                      />
                    </div>
                  </S.InputGroup3>
                  <S.InputGroup>
                    <div>
                      <S.Label htmlFor="expiresMonth">
                        Mês de vencimento
                      </S.Label>
                      <S.Input
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        id="expiresMonth"
                        value={form.values.expiresMonth}
                      />
                    </div>
                    <div>
                      <S.Label htmlFor="expiresYear">Ano de vencimento</S.Label>
                      <S.Input
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        id="expiresYear"
                        value={form.values.expiresYear}
                      />
                    </div>
                  </S.InputGroup>
                  <S.Button
                    onClick={() => {
                      if (
                        checkInputHasError('cardName') &&
                        checkInputHasError('cardCode') &&
                        checkInputHasError('cardNumber') &&
                        checkInputHasError('expiresMonth') &&
                        checkInputHasError('expiresYear')
                      ) {
                        console.log(form.errors)
                      } else {
                        form.handleSubmit()
                        fim()
                      }
                    }}
                  >
                    Finalizar pagamento
                  </S.Button>
                  <S.Button
                    onClick={() => {
                      entrega()
                    }}
                  >
                    Voltar para a edição de endereço
                  </S.Button>
                </>
              )}
              {/* Fim */}
              {etapa === 'fim' && (
                <>
                  <S.Titulo>Pedido realizado - {data?.orderId}</S.Titulo>
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
