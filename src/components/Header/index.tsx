import { useState } from 'react'
import { useRouter } from 'next/router'
import { BiMenu, BiX } from 'react-icons/bi'

import {
  headerOptionsProvider,
  siderbarOptionsProvider
} from '../../providers/headerProvider'

import { Logo } from './components/Logo'
import { HeaderOption } from './components/Option'
import { Sidebar } from './components/Sidebar'
import { SidebarIcon } from './components/SidebarIcon'

import { HeaderContainer, OptionsWrapper } from './styles'
import { useHeaderContext } from '../../contexts/HeaderContext'

export const Header: React.FC = () => {
  const { color } = useHeaderContext()

  const [isSideBarOpen, setIsSideBarOpen] = useState(false)

  const router = useRouter()
  const { pathname } = router

  const fixed = ['/'].includes(pathname)

  return (
    <HeaderContainer fixed={fixed}>
      <Logo to="/" color={color} fixed={!fixed} />

      <OptionsWrapper>
        {headerOptionsProvider.map(option => {
          return (
            <HeaderOption
              key={option.label}
              to={option.to}
              options={option.options}
              color={color}
            >
              {option.label}
            </HeaderOption>
          )
        })}
      </OptionsWrapper>

      <SidebarIcon
        Icon={isSideBarOpen ? BiX : BiMenu}
        onClick={() => setIsSideBarOpen(!isSideBarOpen)}
        color={(isSideBarOpen || color === 'black') && '#000000'}
        fixed={!fixed}
      />
      <Sidebar 
        isOpen={isSideBarOpen} 
        options={siderbarOptionsProvider} 
        onClickOption={() => setIsSideBarOpen(false)} 
      />
    </HeaderContainer>
  )
}
