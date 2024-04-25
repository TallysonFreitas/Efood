import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  bege: '#fff8f2',
  laranja: '#E66767',
  marromClaro: '#FFEBD9',
  branco: '#fff',
  cinza: '#4B4B4B'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  list-style:none;
  font-family:Roboto, sans-serif;
}

body{
  background-color:${cores.bege};
}

.container{
  max-width:1024px;
  width:100%;
  margin: 0 auto;

  @media(max-width:${breakpoints.desktop}){
    padding:0px 16px;
  }
}
`

export const Logo = styled.img`
  width: 126px;
  height: 56px;
`
