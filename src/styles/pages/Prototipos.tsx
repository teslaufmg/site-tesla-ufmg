import { useEffect, useState } from 'react'
import { IconType } from 'react-icons'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
`

export const Section = styled.section<{
  withBackground?: boolean
  black?: boolean
  car?: 'NK319' | 'NK218' | 'Kayran'
}>`
  min-height: 100%;

  padding: 20px;

  display: flex;

  position: relative;

  background-color: ${props => props.black && props.theme.colors.black};
  ${props =>
    props.withBackground && {
      backgroundImage:
        props.car === 'Kayran'
          ? "url('/assets/images/prototipos/kayran/kayran-inicio.jpg')"
          : props.car === 'NK218'
          ? "url('/assets/images/prototipos/nk218/nk218-inicio.jpg')"
          : props.car === 'NK319' &&
            "url('/assets/images/prototipos/nk319/nk319-inicio.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
`

export const SectionStartContent = styled.div<{
  top?: boolean
  left?: boolean
}>`
  margin: 20% auto 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  text-align: center;

  color: ${props => props.theme.colors.white};

  @media ${props => props.theme.breakpoints.tablet} {
    margin: 0 40px;

    ${props =>
      props.top
        ? {
            marginTop: '40px'
          }
        : {
            marginBottom: '40px'
          }}

    ${props =>
      props.left
        ? {
            marginRight: 'auto'
          }
        : {
            marginLeft: 'auto'
          }};

    align-items: ${props => (props.left ? 'flex-start' : 'flex-end')};
    justify-content: ${props => (props.top ? 'flex-start' : 'flex-end')};
  }
`

export const Title = styled.h1`
  font-size: 3rem;
  line-height: 1;

  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 5rem;
  }

  @media ${props => props.theme.breakpoints.laptop} {
    font-size: 8rem;
  }

  @media ${props => props.theme.breakpoints.laptopL} {
    font-size: 10rem;
  }
`

export const Subtitle = styled.p`
  font-size: 1.5rem;
  line-height: 1;

  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 2rem;
  }

  @media ${props => props.theme.breakpoints.laptop} {
    font-size: 4rem;
  }
`

export const PageTitle = styled.h1`
  font-size: 1.5rem;
  border-bottom: 1px solid ${props => props.theme.colors['gray-600']};

  margin-bottom: 24px;

  @media ${props => props.theme.breakpoints.laptop} {
    font-size: 3rem;
  }

  @media ${props => props.theme.breakpoints.laptopL} {
    font-size: 4rem;
  }
`

export const SectionContent = styled.div<{
  noPadding?: boolean
  larger?: boolean
}>`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;

  padding-top: ${props => !props.noPadding && '40px'};

  display: flex;
  flex-direction: column;

  @media ${props => props.theme.breakpoints.tablet} {
    max-width: ${props => !props.larger && '70%'};
    padding-top: ${props => !props.noPadding && '80px'};
  }

  @media ${props => props.theme.breakpoints.laptop} {
    max-width: ${props => !props.larger && '60%'};
  }
`

const YearsArrowsUnstyled = ({
  className,
  onClickLeft,
  onClickRight
}: {
  className?: string
  onClickLeft: () => void
  onClickRight: () => void
}) => {
  return (
    <div className={className}>
      <BiChevronLeft onClick={onClickLeft} />
      <BiChevronRight onClick={onClickRight} />
    </div>
  )
}

const YearsArrows = styled(YearsArrowsUnstyled)`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 40px;

  position: absolute;
  width: 100%;
  height: 100%;

  & > svg {
    cursor: pointer;
    font-size: 3rem;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    gap: 60px;
  }

  @media ${props => props.theme.breakpoints.laptopL} {
    gap: 100px;
  }
`

const YearsGradient = styled.div<{ position: 'left' | 'right' }>`
  position: absolute;
  ${props =>
    props.position === 'left'
      ? {
          left: 0,
          backgroundImage:
            'linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))'
        }
      : {
          right: 0,
          backgroundImage:
            'linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))'
        }}
  top: 0;
  bottom: 0;

  width: 20%;
  height: 100%;
`

const YearsRowUnstyled = ({
  className,
  years,
  initialCarIndex,
  onChangeYearIndex
}: {
  className?: string
  years: {
    year: string
  }[]
  initialCarIndex: number
  onChangeYearIndex: (yearsIndex: number) => void
}) => {
  const [yearsIndex, setYearsIndex] = useState(initialCarIndex)
  const [sizeIndex, setSizeIndex] = useState(1)

  useEffect(() => {
    setSizeIndex(window.screen.width >= 768 ? 2 : 1)
  }, [])

  useEffect(() => {
    onChangeYearIndex(yearsIndex)
  }, [yearsIndex])

  return (
    <div className={className}>
      <YearsArrows
        onClickLeft={() =>
          yearsIndex > sizeIndex && setYearsIndex(yearsIndex - 1)
        }
        onClickRight={() =>
          yearsIndex < years.length - 1 && setYearsIndex(yearsIndex + 1)
        }
      />
      <YearsGradient position="left" />
      <YearsGradient position="right" />
      {years.map((year, index) => {
        if (
          index >= yearsIndex - sizeIndex &&
          index <= yearsIndex + sizeIndex
        ) {
          return (
            <p key={index} className={index === yearsIndex && 'center'}>
              {year.year}
            </p>
          )
        }
      })}
    </div>
  )
}

export const YearsRow = styled(YearsRowUnstyled)`
  position: relative;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  & > p {
    font-family: Gilroy-Extrabold;
    font-size: 1.5rem;
    color: ${props => props.theme.colors['gray-600']};

    width: 100%;

    text-align: center;

    &.center {
      color: ${props => props.theme.colors.primary};
    }
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-template-columns: repeat(5, 1fr);
    font-size: 2rem;
  }
`

export const CarWrapper = styled.div`
  position: relative;
  height: 350px;

  margin-top: 24px;

  & img {
    object-fit: contain;
  }
`

export const CarNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  & > button {
    background-color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
  }

  @media ${props => props.theme.breakpoints.mobileL} {
    position: absolute;
    z-index: 10;
    top: 16px;
    left: 0;
  }
`

export const CarName = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 8px;
  border-bottom: 1px solid ${props => props.theme.colors['gray-600']};

  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 3rem;
  }
`

export const CarDescription = styled.p`
  position: absolute;

  top: unset;
  right: unset;
  bottom: 0;
  max-width: 100%;

  color: ${props => props.theme.colors.text};

  font-size: 1rem;
  line-height: 1.5;

  @media ${props => props.theme.breakpoints.mobileL} {
    top: 16px;
    right: 0;
    max-width: 40%;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 1.125rem;
  }
`

export const BoxDataWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const BoxDataUnstyled = ({
  className,
  Icon,
  data,
  value
}: {
  className?: string
  Icon: IconType
  data: string
  value: string
}) => {
  return (
    <div className={className}>
      <Icon />
      <div>
        <p>{data}</p>
        <h6>{value}</h6>
      </div>
    </div>
  )
}

export const BoxData = styled(BoxDataUnstyled)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  border-radius: 24px;
  background-color: ${props => props.theme.colors['gray-300']};

  gap: 8px;

  & svg {
    width: auto;
    height: 100%;
  }

  & p {
    font-size: 1rem;
    line-height: 1;
  }

  & h6 {
    font-size: 1.5rem;
    line-height: 1;
  }

  @media ${props => props.theme.breakpoints.laptopL} {
    & p {
      font-size: 1.25rem;
    }

    & h6 {
      font-size: 2rem;
    }
  }
`

export const RowWrapper = styled.div<{
  section?: boolean
  templateRows?: boolean
}>`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: ${props => props.templateRows && '1fr 1fr'};
  gap: 24px;
  align-items: center;

  ${props =>
    props.section
      ? {
          height: '100%'
        }
      : {
          margin: 'auto 0'
        }};

  @media ${props => props.theme.breakpoints.tablet} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: ${props => props.templateRows && '1fr'};
  }
`

export const ParagraphPositions = styled.p`
  font-size: 0.75rem;
  color: ${props => props.theme.colors.text};
  text-align: justify;
  text-indent: 2rem;
  &:not(:last-child) {
    margin-bottom: 8px;
  }

  @media ${props => props.theme.breakpoints.mobileL} {
    font-size: 1rem;
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }

  @media ${props => props.theme.breakpoints.laptop} {
    font-size: 1.5rem;
  }
`

export const PositionsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: 'other-0 other-1 other-2' 'other-3 other-4 other-5' 'lastItem lastItem lastItem';
  gap: 8px;
`

const GeneralPositionUnstyled = ({
  className,
  position
}: {
  className?: string
  position: number
}) => {
  return (
    <p className={className}>
      <strong>{position}°</strong> GERAL
    </p>
  )
}

export const GeneralPosition = styled(GeneralPositionUnstyled)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;

  & strong {
    font-family: Gilroy-Extrabold;
    font-size: 2rem;
  }

  @media ${props => props.theme.breakpoints.mobileL} {
    font-size: 2rem;

    & strong {
      font-size: 3rem;
    }
  }

  @media ${props => props.theme.breakpoints.laptop} {
    font-size: 3rem;

    & strong {
      font-size: 4rem;
    }
  }
`

const PositionUnstyled = ({
  className,
  position,
  category
}: {
  className?: string
  position?: number
  category: string
}) => {
  return (
    <div className={className}>
      <p className="position">{position ? position + '°' : '-'}</p>
      <p className="category">{category}</p>
    </div>
  )
}

export const Position = styled(PositionUnstyled)<{
  lastItem?: boolean
  index: number
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  grid-area: ${props => (props.lastItem ? 'lastItem' : 'other-' + props.index)};

  & .position {
    font-size: 1.5rem;
  }

  & .category {
    font-size: 0.75rem;
  }

  @media ${props => props.theme.breakpoints.mobileL} {
    & .position {
      font-size: 2rem;
    }

    & .category {
      font-size: 1rem;
    }
  }

  @media ${props => props.theme.breakpoints.laptop} {
    & .position {
      font-size: 3rem;
    }

    & .category {
      font-size: 1.5rem;
    }
  }
`

export const DTecWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 70%;

  & img {
    object-fit: contain;
  }
`

export const DataWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;

  @media ${props => props.theme.breakpoints.tablet} {
    gap: 16px;
  }
`

const CarDataUnstyled = ({
  className,
  data,
  info
}: {
  className?: string
  data: string
  info: string
}) => {
  return (
    <div className={className}>
      <p className="info">{info}</p>
      <p className="data">{data}</p>
    </div>
  )
}

export const CarData = styled(CarDataUnstyled)`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${props => props.theme.colors.white};

  & .info {
    font-family: Gilroy-Extrabold;
    font-size: 1rem;
  }

  & .data {
    font-size: 0.75rem;
  }

  @media ${props => props.theme.breakpoints.laptop} {
    align-items: flex-start;
    & .info {
      font-size: 1.5rem;
    }

    & .data {
      font-size: 1rem;
    }
  }

  @media ${props => props.theme.breakpoints.laptopL} {
    & .info {
      font-size: 2rem;
    }

    & .data {
      font-size: 1.5rem;
    }
  }
`

export const ContentTitle = styled.h2`
  font-size: 2rem;
  line-height: 1;
  border-bottom: 6px solid ${props => props.theme.colors.primary};
  margin: 0 auto 24px;

  text-align: center;

  color: ${props => props.theme.colors.black};

  @media ${props => props.theme.breakpoints.laptop} {
    font-size: 4rem;
    margin-bottom: 32px;
  }
`

export const SubsystemTitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 8px;

  color: ${props => props.theme.colors.black};

  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 1.75rem;
  }
`

export const ContentText = styled.p`
  margin-bottom: 16px;

  color: ${props => props.theme.colors.text};

  font-size: 1rem;
  line-height: 1.5;

  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 1.125rem;
  }
`

export const ContentImageWrapper = styled.div`
  position: relative;
  padding-bottom: 30%;
  min-height: 200px;

  margin-bottom: 16px;
  & img {
    object-fit: contain;
  }
`
