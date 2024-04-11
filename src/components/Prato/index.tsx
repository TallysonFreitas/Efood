import { useState } from 'react'
import Modal from '../Modal'
import { Button, Card, Descricao, Imagem, Titulo } from './style'

type Props = {
  titulo: string
  imagem: string
  descricao: string
  valor: number
  id: number
}

const Prato = ({ titulo, imagem, descricao, valor, id }: Props) => {
  function ativaModal() {
    setVisivel(!visivel)
  }

  const [visivel, setVisivel] = useState(false)
  return (
    <>
      <Card>
        <Imagem src={imagem} />
        <Titulo>{titulo}</Titulo>
        <Descricao>{descricao}</Descricao>
        <Button onClick={ativaModal}>Mais detalhes</Button>
      </Card>
      <Modal
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
