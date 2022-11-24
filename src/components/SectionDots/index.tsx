import styled from 'styled-components'

const DotUnstyled = ({ className, to }: { className?: string; to: string }) => {
  return (
    <div className={className}>
      <a href={to} />
    </div>
  )
}

const Dot = styled(DotUnstyled)<{
  filled: boolean
}>`
  width: 14px;
  height: 14px;

  border-radius: 50%;
  border: 1px solid ${props => props.theme.colors.white};

  background-color: ${props =>
    props.filled ? props.theme.colors.white : 'transparent'};

  cursor: pointer;

  > a {
    width: 100%;
    height: 100%;
    display: block;
  }
`

const DotsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  position: absolute;
  left: 8px;
  top: 50%;
  transform: translate(0, -50%);
`

export const SectionDots = ({
  dots,
  selected
}: {
  dots: string[]
  selected: string
}) => {
  return (
    <DotsWrapper>
      {dots.map(d => {
        return <Dot key={d} filled={selected === d} to={'#' + d} />
      })}
    </DotsWrapper>
  )
}
