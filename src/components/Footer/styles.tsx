import Link from 'next/link'
import { ReactNode } from 'react'
import styled from 'styled-components'

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 40px;

  color: ${props => props.theme.colors.white};

  @media ${props => props.theme.breakpoints.tablet} {
    flex-direction: row;
    align-items: flex-start;

    gap: 10px;
  }
`

export const OptionsContainer = styled.div`
  display: flex;
  column-gap: 20px;

  @media ${props => props.theme.breakpoints.laptop} {
    gap: 60px;
  }
`

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
`

export const OptionsExplorar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media ${props => props.theme.breakpoints.laptop} {
    flex-direction: row;
    gap: 60px;
  }
`

const OptionUnstyled = ({
  to,
  children,
  className
}: {
  to: string
  children: ReactNode
  className?: string
}) => {
  return (
    <Link href={to}>
      <a className={className}>{children}</a>
    </Link>
  )
}

export const Option = styled(OptionUnstyled)`
  font-size: 1.25rem;
  font-family: Gilroy-Light;
  cursor: pointer;
  color: #a4a6a9;

  white-space: nowrap;

  &:hover {
    color: ${props => props.theme.colors.primary};
    text-decoration: underline;
  }
`

export const TeslaName = styled.h2`
  text-align: center;
  margin-bottom: 10px;

  @media ${props => props.theme.breakpoints.tablet} {
    text-align: end;
  }
`

export const TeslaAddress = styled.p`
  text-align: center;
  font-size: 1.25rem;

  max-width: 310px;

  @media ${props => props.theme.breakpoints.tablet} {
    text-align: end;
  }
`
