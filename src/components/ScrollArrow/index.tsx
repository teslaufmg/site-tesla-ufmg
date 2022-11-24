import { BiChevronDown } from 'react-icons/bi'
import styled from 'styled-components'

const ArrowUnstyled = ({
  className,
  to
}: {
  className?: string
  to: string
}) => {
  return (
    <a href={'#' + to}>
      <BiChevronDown className={className} />
    </a>
  )
}

export const ScrollArrow = styled(ArrowUnstyled)<{
  color?: 'white' | 'black'
  direction: 'down' | 'up'
}>`
  cursor: pointer;
  color: ${props =>
    props.color === 'black'
      ? props.theme.colors.black
      : props.theme.colors.white};

  position: absolute;
  z-index: 2;

  width: 50px;
  height: 50px;

  ${({ direction }) =>
    direction === 'up' &&
    `
      transform: rotate(180deg);
      top: 10px;
      right: 60px;
  `}

  ${({ direction }) =>
    direction === 'down' &&
    `
      bottom: 8px;
      left: 50%;
      transform: translate(-50%, 0);
  `}
`
