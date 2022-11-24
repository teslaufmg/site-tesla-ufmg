import { IconType } from 'react-icons'
import styled from 'styled-components'

const SidebarIconUnstyled = ({
  className,
  color,
  Icon,
  onClick
}: {
  className?: string
  color?: string
  Icon: IconType
  onClick: () => void
}) => {
  return (
    <Icon
      className={className}
      size={50}
      onClick={onClick}
      color={color || '#FFFFFF'}
    />
  )
}

export const SidebarIcon = styled(SidebarIconUnstyled)<{
  fixed?: boolean
}>`
  cursor: pointer;

  position: ${props => (props.fixed ? 'fixed' : 'absolute')};
  right: ${props => (props.fixed ? '13px' : '0')};
  z-index: 20;
`
