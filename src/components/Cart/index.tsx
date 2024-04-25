import { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { formataValorReal } from '../Modal'
import { useFormik } from 'formik'
import { usePurchaseMutation } from '../../services/api'
import { clearCart } from '../../store/Reducers/PratosReducer'
import * as Yup from 'yup'

import * as S from './style'

import CartItem from '../CartItem'
import CloseImg from '../../assets/images/close.png'
import InputMask from 'react-input-mask'

const Cart = ({ visible, close }: { visible: boolean; close: () => void }) => {
  const [etapa, setEtapa] = useState('carrinho')
  const { orders } = useSelector((state: RootReducer) => {
    return state.orders
  })
  const dispatch = useDispatch()

  const ValorTotal = orders.reduce(
    (acumulador, each) => acumulador + each.valor,
    0
  )

  const [purchase, { data }] = usePurchaseMutation()

  const checkInputHasError = (fieldName: string) => {
    const isInvalid = fieldName in form.errors

    if (
      form.values.receiver === '' ||
      form.values.city === '' ||
      form.values.zipCode === '' ||
      form.values.number === '' ||
      form.values.description === ''
    ) {
      return true
    }
    return isInvalid
  }

  const checkInputIsInvalid = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) {
      return true
    } else {
      return false
    }
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
      cardNumber: Yup.string()
        .min(16, 'o valor minimo é 16 digitos')
        .required('O campo é obrigatorio'),
      cardCode: Yup.string()
        .min(3, 'o valor minimo é 3 digitos')
        .required('O campo é obrigatorio'),
      expiresMonth: Yup.string()
        .min(2, 'o valor minimo é 2 digitos')
        .required('O campo é obrigatorio'),
      expiresYear: Yup.string()
        .min(4, 'o valor minimo é 4 digitos')
        .required('O campo é obrigatorio')
    }),
    onSubmit: (values) => {
      purchase({
        products: orders.map((each) => ({ id: each.id, price: each.valor })),
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

  const validaEndereco = () => {
    if (
      checkInputHasError('receiver') ||
      checkInputHasError('city') ||
      checkInputHasError('zipCode') ||
      checkInputHasError('number') ||
      checkInputHasError('description')
    ) {
      console.log(form.errors)
    } else {
      setEtapa('pagamento')
    }
  }

  const validaCartao = () => {
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
      setEtapa('fim')
    }
  }

  const finalizaPedido = () => {
    close(), dispatch(clearCart()), setEtapa('carrinho')
  }

  return (
    <S.Container visible={visible}>
      <div
        className="overlay"
        onClick={() => {
          close()
        }}
      ></div>
      <S.ContainCard>
        <S.Card>
          {orders.length > 0 ? (
            <>
              <S.Close onClick={close}>
                <img src={CloseImg} alt="close" />
              </S.Close>
              {/* Carrinho */}
              {etapa === 'carrinho' && (
                <>
                  {orders.map((each) => {
                    return (
                      <CartItem
                        description={each.descricao}
                        image={each.imagem}
                        price={each.valor}
                        title={each.titulo}
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
                    className={checkInputIsInvalid('receiver') ? 'error' : ''}
                  />
                  <S.Label htmlFor="description">Endereço</S.Label>
                  <S.Input
                    name="description"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    id="number"
                    value={form.values.description}
                    className={
                      checkInputIsInvalid('description') ? 'error' : ''
                    }
                  />
                  <S.Label htmlFor="city">Cidade</S.Label>
                  <S.Input
                    name="city"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    id="city"
                    value={form.values.city}
                    className={checkInputIsInvalid('city') ? 'error' : ''}
                  />
                  <S.InputGroup>
                    <S.ContainerInput>
                      <S.Label htmlFor="zipCode">CEP</S.Label>
                      <S.Input
                        as={InputMask}
                        type="text"
                        name="zipCode"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        id="zipCode"
                        value={form.values.zipCode}
                        className={
                          checkInputIsInvalid('zipCode') ? 'error' : ''
                        }
                        mask="99999-999"
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
                        className={checkInputIsInvalid('number') ? 'error' : ''}
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
                  <S.Button onClick={validaEndereco}>
                    Continuar Pagamento
                  </S.Button>
                  <S.Button
                    onClick={() => {
                      setEtapa('carrinho')
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
                    className={checkInputIsInvalid('cardName') ? 'error' : ''}
                  />
                  <S.InputGroup3>
                    <div>
                      <S.Label htmlFor="cardNumber">Numero do cartão</S.Label>
                      <S.Input
                        as={InputMask}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        id="cardNumber"
                        value={form.values.cardNumber}
                        className={
                          checkInputIsInvalid('cardNumber') ? 'error' : ''
                        }
                        mask="9999 9999 9999 9999"
                      />
                    </div>
                    <div>
                      <S.Label htmlFor="cardCode">CVV</S.Label>
                      <S.Input
                        as={InputMask}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        id="cardCode"
                        value={form.values.cardCode}
                        className={
                          checkInputIsInvalid('cardCode') ? 'error' : ''
                        }
                        mask="999"
                      />
                    </div>
                  </S.InputGroup3>
                  <S.InputGroup>
                    <div>
                      <S.Label htmlFor="expiresMonth">
                        Mês de vencimento
                      </S.Label>
                      <S.Input
                        as={InputMask}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        id="expiresMonth"
                        value={form.values.expiresMonth}
                        className={
                          checkInputIsInvalid('expiresMonth') ? 'error' : ''
                        }
                        mask="99"
                      />
                    </div>
                    <div>
                      <S.Label htmlFor="expiresYear">Ano de vencimento</S.Label>
                      <S.Input
                        as={InputMask}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        id="expiresYear"
                        value={form.values.expiresYear}
                        className={
                          checkInputIsInvalid('expiresYear') ? 'error' : ''
                        }
                        mask="9999"
                      />
                    </div>
                  </S.InputGroup>
                  <S.Button onClick={validaCartao}>
                    Finalizar pagamento
                  </S.Button>
                  <S.Button
                    onClick={() => {
                      setEtapa('entrega')
                    }}
                  >
                    Voltar para a edição de endereço
                  </S.Button>
                </>
              )}
              {/* Fim */}
              {etapa === 'fim' && data?.orderId && (
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
                  <S.Button onClick={finalizaPedido}>Concluir</S.Button>
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

export default Cart
