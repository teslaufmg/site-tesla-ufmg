import { useRouter } from 'next/router'
import React, { createContext, useContext, useEffect, useState } from 'react'

export type Colors = 'white' | 'black'

interface HeaderContextProps {
  color: Colors
  toggleColor: () => void
  handleColor: (value: Colors) => void
}

interface HeaderContextProviderProps {
  children: React.ReactNode
}

const HeaderContext = createContext({} as HeaderContextProps)

const { Provider } = HeaderContext

export const HeaderContextProvider = ({
  children
}: HeaderContextProviderProps) => {
  const [color, setColor] = useState<Colors>('white')
  const router = useRouter()
  const { pathname } = router

  useEffect(() => {
    if (pathname !== '/') handleColor('black')
  }, [pathname])

  const toggleColor = () => {
    if (color === 'white') setColor('black')
    else if (color === 'black') setColor('white')
  }

  const handleColor = (value: Colors) => {
    setColor(value)
  }

  return (
    <Provider
      value={{
        color,
        toggleColor,
        handleColor
      }}
    >
      {children}
    </Provider>
  )
}

export const useHeaderContext = () => {
  return useContext(HeaderContext)
}
