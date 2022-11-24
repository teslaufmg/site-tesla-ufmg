const size = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560
}

const theme = {
  colors: {
    background: '#FFFFFF',
    text: '#58595b',
    primary: '#4ed840',
    black: '#000000',
    white: '#FFFFFF',
    'gray-300': '#f6f6f6',
    'gray-600': '#707070'
  },
  breakpoints: {
    mobileS: `(min-width: ${size.mobileS}px)`,
    mobileM: `(min-width: ${size.mobileM}px)`,
    mobileL: `(min-width: ${size.mobileL}px)`,
    tablet: `(min-width: ${size.tablet}px)`,
    laptop: `(min-width: ${size.laptop}px)`,
    laptopL: `(min-width: ${size.laptopL}px)`,
    desktop: `(min-width: ${size.desktop}px)`,
    desktopL: `(min-width: ${size.desktop}px)`
  }
}

export default theme
