import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { Header } from '../components/Header'
import { HeaderContextProvider } from '../contexts/HeaderContext'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <HeaderContextProvider>
        <Header />
        <Component {...pageProps} />
        <GlobalStyle />
      </HeaderContextProvider>
    </ThemeProvider>
  )
}

export default MyApp
