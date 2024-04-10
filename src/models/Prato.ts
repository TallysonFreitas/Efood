export class Prato {
  nome: string
  descricao: string
  link: string
  tags: string[]
  nota: number
  imagem: string

  constructor(
    nome: string,
    descricao: string,
    link: string,
    tags: string[],
    nota: number,
    imagem: string
  ) {
    this.nome = nome
    this.descricao = descricao
    this.imagem = imagem
    this.link = link
    this.nome = nome
    this.nota = nota
    this.tags = tags
  }
}
