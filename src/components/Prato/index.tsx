import * as S from './style'

type Props = {
  titulo: string
  imagem: string
  descricao: string
  abrir: () => void
}

const Prato = ({ titulo, imagem, descricao, abrir }: Props) => {
  return (
    <>
      <S.Card>
        <div>
          <S.Imagem src={imagem} />
          <S.Titulo>{titulo}</S.Titulo>
          <S.Descricao>{descricao}</S.Descricao>
        </div>
        <S.Button onClick={abrir}>Mais detalhes</S.Button>
      </S.Card>
    </>
  )
}

export default Prato
