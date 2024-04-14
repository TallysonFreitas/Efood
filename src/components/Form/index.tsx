import * as S from './style'

const Entrega = ({
  voltar,
  continuar,
  type
}: {
  voltar: () => void
  continuar: () => void
  type: 'entrega' | 'pagamento'
}) => {
  return (
    <S.Container>
      {type === 'entrega' ? (
        <>
          <S.Titulo>Entrega</S.Titulo>
          <S.Label htmlFor="recebedor">Quem irá receber</S.Label>
          <S.Input required name="recebedor" />
          <S.Label htmlFor="endereco">Endereço</S.Label>
          <S.Input required name="endereco" />
          <S.Label htmlFor="cidade">Cidade</S.Label>
          <S.Input required name="cidade" />
          <S.InputGroup>
            <S.Container>
              <S.Label htmlFor="cep">CEP</S.Label>
              <S.Input required name="cep" />
            </S.Container>
            <S.Container>
              <S.Label htmlFor="numero">Número</S.Label>
              <S.Input required name="numero" />
            </S.Container>
          </S.InputGroup>
          <S.Label htmlFor="complemento">Complemento (opcional)</S.Label>
          <S.Input name="complemento" />
          <S.Button
            onClick={() => {
              continuar()
            }}
          >
            Continuar Pagamento
          </S.Button>
          <S.Button
            onClick={() => {
              voltar()
            }}
          >
            Voltar para o carrinho
          </S.Button>
        </>
      ) : (
        <>
          <S.Titulo>Pagamento - Valor a pagar</S.Titulo>
          <S.Label>Nome no cartão</S.Label>
          <S.Input required />
          <S.InputGroup3>
            <div>
              <S.Label>Numero do cartão</S.Label>
              <S.Input required />
            </div>
            <div>
              <S.Label>CVV</S.Label>
              <S.Input required />
            </div>
          </S.InputGroup3>
          <S.InputGroup>
            <div>
              <S.Label>Mês de vencimento</S.Label>
              <S.Input required />
            </div>
            <div>
              <S.Label>Ano de vencimento</S.Label>
              <S.Input required />
            </div>
          </S.InputGroup>
          <S.Button
            onClick={() => {
              continuar()
            }}
          >
            Finalizar pagamento
          </S.Button>
          <S.Button
            onClick={() => {
              voltar()
            }}
          >
            Voltar para a edição de endereço
          </S.Button>
        </>
      )}
    </S.Container>
  )
}

export default Entrega
