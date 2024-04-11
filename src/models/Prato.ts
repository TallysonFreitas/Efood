export class PratoType {
  titulo: string
  descricao: string
  imagem: string
  valor: number
  id: number

  constructor(
    titulo: string,
    descricao: string,
    imagem: string,
    valor: number,
    id: number
  ) {
    this.titulo = titulo
    this.descricao = descricao
    this.imagem = imagem
    this.valor = valor
    this.id = id
  }
}
