import { ReactNode } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { BiCaretDown } from 'react-icons/bi'

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

const Option = styled(OptionUnstyled)<{
  color?: 'white' | 'black'
}>`
  font-size: 1.25rem;

  color: ${props =>
    props.color === 'black'
      ? props.theme.colors.black
      : props.theme.colors.white};

  margin: 4px 0;

  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const DropdownOptionUnstyled = ({
  to,
  children,
  options,
  className,
  color
}: {
  to: string
  children: ReactNode
  options: {
    label: string
    to: string
  }[]
  className?: string
  color?: 'white' | 'black'
}) => {
  return (
    <div className={className}>
      <div className="option">
        <Option to={to} color={color}>
          {children}
        </Option>
        <BiCaretDown color={color === 'black' ? '#000000' : '#FFFFFF'} />
      </div>
      <div className="list">
        {options.map(option => {
          return (
            <Option key={option.label} to={option.to}>
              {option.label}
            </Option>
          )
        })}
      </div>
    </div>
  )
}

const DropdownOption = styled(DropdownOptionUnstyled)`
  position: relative;

  &:hover {
    & .list {
      display: flex;
    }
  }

  & .option {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 4px;
  }

  & .list {
    background-color: ${props => props.theme.colors.white};

    width: 100%;

    position: absolute;
    display: none;

    flex-direction: column;

    border-radius: 8px;

    &:hover {
      display: flex;
    }

    & > a {
      font-size: 1rem;
      line-height: 1.5;

      color: ${props => props.theme.colors.black};

      text-align: center;
      text-decoration: none;

      padding: 4px 0;
      margin: 0;

      &:first-child {
        border-radius: 8px 8px 0 0;
      }

      &:last-child {
        border-radius: 0 0 8px 8px;
      }

      &:hover {
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.white};
      }
    }
  }
`

export const HeaderOption = ({
  to,
  children,
  options,
  color
}: {
  to: string
  children: ReactNode
  options?: {
    label: string
    to: string
  }[]
  color?: 'white' | 'black'
}) => {
  return (
    <>
      {options ? (
        <DropdownOption to={to} options={options} color={color}>
          {children}
        </DropdownOption>
      ) : (
        <Option to={to} color={color}>
          {children}
        </Option>
      )}
    </>
  )
}
