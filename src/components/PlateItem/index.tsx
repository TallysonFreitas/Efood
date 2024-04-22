import * as S from './style'

type Props = {
  title: string
  image: string
  description: string
  open: () => void
}

const PlateItem = ({ title, image, description, open }: Props) => {
  return (
    <>
      <S.Card>
        <div>
          <S.Image src={image} />
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </div>
        <S.Button onClick={open}>Mais detalhes</S.Button>
      </S.Card>
    </>
  )
}

export default PlateItem
