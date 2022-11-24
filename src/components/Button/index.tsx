import Link from 'next/link'
import { ReactNode } from 'react'
import styled from 'styled-components'

const ButtonUnstyled = ({
  className,
  to,
  children
}: {
  className?: string
  to?: string
  children: ReactNode
}) => {
  return (
    <button className={className}>
      <Link href={to || ''}>
        <a>{children}</a>
      </Link>
    </button>
  )
}

export const Button = styled(ButtonUnstyled)<{
  width?: number
  color?: string
  colorOnHover?: string
  backgroundColorOnHover?: string
}>`
  width: ${props => (props.width ? props.width * 0.6 + 'px' : '100%')};
  height: 30px;

  border: 2px solid ${props => props.color || props.theme.colors.white};
  border-radius: 32px;
  background-color: transparent;

  transition: 0.5s;

  @media ${props => props.theme.breakpoints.mobileL} {
    width: ${props => (props.width ? props.width * 0.75 + 'px' : '100%')};
    height: 40px;

    padding: 8px;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    width: ${props => (props.width ? props.width + 'px' : '100%')};
  }

  &:hover {
    background-color: ${props =>
      props.backgroundColorOnHover || props.theme.colors.white};

    & > a {
      color: ${props => props.colorOnHover || props.theme.colors.black};
    }
  }

  & > a {
    font-size: 0.8rem;
    font-family: Gilroy-Light;

    color: ${props => props.color || props.theme.colors.white};

    text-decoration: none;

    @media ${props => props.theme.breakpoints.mobileL} {
      font-size: 1rem;
    }

    @media ${props => props.theme.breakpoints.tablet} {
      font-size: 1.25rem;
    }
  }
`
