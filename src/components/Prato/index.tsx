import { useState } from 'react'
import * as S from './style'
import Modal from '../Modal'

type Props = {
  titulo: string
  imagem: string
  descricao: string
  valor: number
  id: number
  porcao: string
}

const Prato = ({ titulo, imagem, descricao, valor, id, porcao }: Props) => {
  function ativaModal() {
    setVisivel(!visivel)
  }

  const [visivel, setVisivel] = useState(false)
  return (
    <>
      <S.Card>
        <div>
          <S.Imagem src={imagem} />
          <S.Titulo>{titulo}</S.Titulo>
          <S.Descricao>{descricao}</S.Descricao>
        </div>
        <S.Button onClick={ativaModal}>Mais detalhes</S.Button>
      </S.Card>
      <Modal
        porcao={porcao}
        visivel={visivel}
        fechar={ativaModal}
        imagem={imagem}
        titulo={titulo}
        descricao={descricao}
        valor={valor}
        id={id}
      />
    </>
  )
}

export default Prato
