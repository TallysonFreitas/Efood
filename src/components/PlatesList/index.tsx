import { useState } from 'react'

import PlateItem from '../PlateItem'
import Modal from '../Modal'

import { CardapioType } from '../../pages/Home'

import * as S from './style'

type Props = {
  plates: CardapioType[]
}

const PlatesList = ({ plates }: Props) => {
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
        {plates.map((each) => (
          <PlateItem
            description={each.descricao}
            image={each.foto}
            title={each.nome}
            key={each.id}
            open={() => {
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

export default PlatesList
