import Link from 'next/link'
import styled from 'styled-components'

const SidebarUnstyled = ({
  className,
  isOpen,
  options,
  onClickOption
}: {
  className?: string
  isOpen?: boolean
  options: {
    label: string
    to: string
  }[]
  onClickOption: () => void
}) => {
  return (
    <div className={className + ' ' + (isOpen && 'open')}>
      {options.map(option => {
        return (
          <Link key={option.label} href={option.to}>
            <a onClick={onClickOption}>{option.label}</a>
          </Link>
        )
      })}
    </div>
  )
}

export const Sidebar = styled(SidebarUnstyled)`
  height: 100%;
  width: 0;
  transition: 0.5s;

  position: fixed;
  top: 0;
  right: 0;

  display: flex;
  flex-direction: column;

  gap: 12px;

  background-color: ${props => props.theme.colors.white};

  padding: 20px 0 0 0;

  &.open {
    width: 250px;
    padding: 20px 0 0 32px;

    & > a {
      display: unset;
    }
  }

  & > a {
    font-size: 1.5rem;

    color: ${props => props.theme.colors.black};

    text-decoration: none;

    display: none;
    transition: 0.5s;

    white-space: nowrap;

    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`
