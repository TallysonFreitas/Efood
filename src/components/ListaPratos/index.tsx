import { useState } from 'react'
import { CardapioType } from '../../pages/Home'
import Prato from '../Prato'
import * as S from './style'
import Modal from '../Modal'

type Props = {
  pratos: CardapioType[]
}

const ListaPratos = ({ pratos }: Props) => {
  const modalInitialState = {
    foto: '',
    preco: 0,
    id: 0,
    nome: '',
    descricao: '',
    porcao: ''
  }

  const [modalProps, setModalProps] = useState<CardapioType>(modalInitialState)
  const [modalVisivel, setModalVisivel] = useState<boolean>(false)

  return (
    <S.Container>
      <div className="container">
        {pratos.map((each) => (
          <Prato
            descricao={each.descricao}
            imagem={each.foto}
            titulo={each.nome}
            key={each.id}
            abrir={() => {
              setModalVisivel(true),
                setModalProps({
                  foto: each.foto,
                  preco: each.preco,
                  id: each.id,
                  nome: each.nome,
                  descricao: each.descricao,
                  porcao: each.porcao
                })
            }}
          />
        ))}
      </div>
      <Modal
        descricao={modalProps.descricao}
        id={modalProps.id}
        imagem={modalProps.foto}
        porcao={modalProps.porcao}
        titulo={modalProps.nome}
        valor={modalProps.preco}
        visivel={modalVisivel}
        fechar={() => {
          setModalVisivel(false), setModalProps(modalInitialState)
        }}
      />
    </S.Container>
  )
}

export default ListaPratos
