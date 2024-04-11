import {
  Button,
  Container,
  Input,
  InputGroup,
  InputGroup3,
  Label,
  Titulo
} from './style'

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
    <Container>
      {type === 'entrega' ? (
        <>
          <Titulo>Entrega</Titulo>
          <Label htmlFor="recebedor">Quem irá receber</Label>
          <Input required name="recebedor" />
          <Label htmlFor="endereco">Endereço</Label>
          <Input required name="endereco" />
          <Label htmlFor="cidade">Cidade</Label>
          <Input required name="cidade" />
          <InputGroup>
            <Container>
              <Label htmlFor="cep">CEP</Label>
              <Input required name="cep" />
            </Container>
            <Container>
              <Label htmlFor="numero">Número</Label>
              <Input required name="numero" />
            </Container>
          </InputGroup>
          <Label htmlFor="complemento">Complemento (opcional)</Label>
          <Input name="complemento" />
          <Button
            onClick={() => {
              continuar()
            }}
          >
            Continuar Pagamento
          </Button>
          <Button
            onClick={() => {
              voltar()
            }}
          >
            Voltar para o carrinho
          </Button>
        </>
      ) : (
        <>
          <Titulo>Pagamento - Valor a pagar</Titulo>
          <Label>Nome no cartão</Label>
          <Input required />
          <InputGroup3>
            <div>
              <Label>Numero do cartão</Label>
              <Input required />
            </div>
            <div>
              <Label>CVV</Label>
              <Input required />
            </div>
          </InputGroup3>
          <InputGroup>
            <div>
              <Label>Mês de vencimento</Label>
              <Input required />
            </div>
            <div>
              <Label>Ano de vencimento</Label>
              <Input required />
            </div>
          </InputGroup>
          <Button
            onClick={() => {
              continuar()
            }}
          >
            Finalizar pagamento
          </Button>
          <Button
            onClick={() => {
              voltar()
            }}
          >
            Voltar para a edição de endereço
          </Button>
        </>
      )}
    </Container>
  )
}

export default Entrega
