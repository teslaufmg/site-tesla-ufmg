import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @font-face {
    font-family: Gilroy-Light;
    src: url('/assets/fonts/Gilroy-Light.otf');
    font-style: normal;
  }

  @font-face {
    font-family: Gilroy-Extrabold;
    src: url('/assets/fonts/Gilroy-ExtraBold.otf');
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.black};
  }

  body, input, textarea, button {
    font: 300 16px Gilroy-Light, sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6, a {
    font-family: Gilroy-ExtraBold, sans-serif;
  }

  #__next {
    height: 100vh;
  }
`
