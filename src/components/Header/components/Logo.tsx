import Link from 'next/link'
import styled from 'styled-components'

import { LogoHeader } from '../../../assets/Logos/LogoHeader'
import { LogoHeaderBlack } from '../../../assets/Logos/LogoHeaderBlack'

const LogoUnstyled = ({
  className,
  to,
  color
}: {
  className?: string
  to: string
  color?: 'white' | 'black'
}) => {
  return (
    <Link href={to}>
      <a className={className}>
        {color === 'black' ? <LogoHeaderBlack /> : <LogoHeader />}
      </a>
    </Link>
  )
}

export const Logo = styled(LogoUnstyled)<{
  fixed?: boolean
}>`
  position: ${props => (props.fixed ? 'fixed' : 'absolute')};
  left: ${props => (props.fixed ? '20px' : '0')};
  /* position: absolute;
  left: 0; */
  & > svg {
    width: 100px;
  }

  @media ${props => props.theme.breakpoints.laptop} {
    & > svg {
      width: unset;
    }
  }
`
