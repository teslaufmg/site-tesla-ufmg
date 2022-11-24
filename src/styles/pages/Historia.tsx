import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.div`
  height: 100%;
`

export const Section = styled.section`
  min-height: 100%;
`

export const SectionContent = styled.div`
  height: 30%;
  padding: 20px;

  display: flex;
  flex-direction: column;

  @media ${props => props.theme.breakpoints.mobileL} {
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
  }
`

export const StartSectionContainer = styled.div`
  height: 100vh;
`

export const ImageWarpper = styled.div`
  height: 70%;
  position: relative;
`

export const ImageStart = styled(Image)`
  object-fit: cover;
`

export const Title = styled.h1`
  font-size: 2rem;
  line-height: 1;

  @media ${props => props.theme.breakpoints.mobileL} {
    font-size: 3rem;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 4rem;
  }

  @media ${props => props.theme.breakpoints.laptop} {
    font-size: 5rem;
    line-height: 0.8;
  }

  @media ${props => props.theme.breakpoints.laptopL} {
    font-size: 8rem;
  }
`

export const Subtitle = styled.p`
  max-width: 100%;
  text-align: end;

  font-size: 0.75rem;

  @media ${props => props.theme.breakpoints.mobileL} {
    max-width: 50%;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 1rem;
  }

  @media ${props => props.theme.breakpoints.laptop} {
    font-size: 1.25rem;
  }

  @media ${props => props.theme.breakpoints.laptopL} {
    font-size: 1.5rem;
  }
`

export const ContentContainer = styled.div<{ start?: boolean; end?: boolean }>`
  max-width: 80%;
  margin: auto;
  padding: ${props => (props.start ? '70px' : 0)} 0
    ${props => (props.end ? '40px' : 0)};

  @media ${props => props.theme.breakpoints.tablet} {
    max-width: 70%;
  }

  @media ${props => props.theme.breakpoints.laptop} {
    max-width: 60%;
  }
`

const VideoWrapperUnstyled = ({
  className,
  videoURL
}: {
  className?: string
  videoURL: string
}) => {
  return (
    <div className={className}>
      <iframe src={videoURL} />
    </div>
  )
}

export const VideoWrapper = styled(VideoWrapperUnstyled)`
  position: relative;

  width: 100%;
  padding-bottom: 56.25%;

  margin-bottom: 40px;

  & > iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    border: none;
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

export const ContentTitle = styled.h1`
  margin-bottom: 32px;

  font-size: 2.5rem;
  line-height: 1;

  @media ${props => props.theme.breakpoints.mobileL} {
    font-size: 3.75rem;
  }
`

const ImageWrapperUnstyled = ({
  className,
  imagePath,
  legend
}: {
  className?: string
  imagePath: string
  legend?: string
}) => {
  return (
    <div className={className}>
      <Image
        src={'/assets/images/historia/' + imagePath}
        layout="responsive"
        width={100}
        height={100}
      />
      {legend && <p>{legend}</p>}
    </div>
  )
}

export const ImageWrapper = styled(ImageWrapperUnstyled)`
  margin-bottom: 32px;
  padding: 0 16px;

  & > span {
    & > span {
      padding-top: 56.25% !important;
    }

    & > img {
      min-width: unset !important;
      width: unset !important;
    }
  }

  & > p {
    width: 100%;
    text-align: center;

    margin: 8px 0;
  }
`

const EquipeYear = styled.h1`
  font-size: 4rem;

  border-bottom: 6px solid ${props => props.theme.colors.primary};
  text-align: center;

  @media ${props => props.theme.breakpoints.mobileL} {
    font-size: 6rem;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 8rem;
  }

  @media ${props => props.theme.breakpoints.laptop} {
    font-size: 10rem;
  }
`

const EquipeCaptian = styled.p`
  margin: 16px 0;

  & strong {
    font-family: Gilroy-Extrabold;
  }
`

const EquipePositionsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;

  margin-top: 16px;

  @media ${props => props.theme.breakpoints.tablet} {
    margin-top: 32px;
  }
`

const EquipePositionItemUnstyled = ({
  className,
  position,
  category
}: {
  className?: string
  position: number
  category: string
}) => {
  return (
    <div className={className}>
      <p className="position">{position}°</p>
      <p className="category">{category}</p>
    </div>
  )
}

const EquipePositionItem = styled(EquipePositionItemUnstyled)<{
  geral?: boolean
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  & p {
    line-height: 1;
    font-family: ${props =>
      props.geral ? 'Gilroy-Extrabold' : 'Gilroy-Light'};
  }

  & .position {
    font-size: ${props => (props.geral ? '2rem' : '1.5rem')};
  }

  & .category {
    font-size: ${props => (props.geral ? '1rem' : '0.75rem')};
  }

  @media ${props => props.theme.breakpoints.mobileL} {
    & .position {
      font-size: ${props => (props.geral ? '2.5rem' : '2rem')};
    }

    & .category {
      font-size: ${props => (props.geral ? '1.5rem' : '1rem')};
    }
  }

  @media ${props => props.theme.breakpoints.tablet} {
    & .position {
      font-size: ${props => (props.geral ? '3rem' : '2.5rem')};
    }

    & .category {
      font-size: ${props => (props.geral ? '2rem' : '1.5rem')};
    }
  }

  @media ${props => props.theme.breakpoints.laptopL} {
    & .position {
      font-size: ${props => (props.geral ? '3.5rem' : '3rem')};
    }

    & .category {
      font-size: ${props => (props.geral ? '2.5rem' : '2rem')};
    }
  }
`

export const EquipeUnstyled = ({
  className,
  year,
  captain,
  positions
}: {
  className?: string
  year: string
  captain: string
  positions: {
    position: number
    category: string
  }[]
}) => {
  return (
    <div className={className}>
      <EquipeYear>{year}</EquipeYear>
      <EquipeCaptian>
        <strong>Capitão:</strong> {captain}
      </EquipeCaptian>
      <EquipePositionsWrapper>
        {positions.map((item, index) => {
          return (
            <EquipePositionItem
              position={item.position}
              category={item.category}
              geral={Math.ceil(positions.length / 2) - 1 === index}
            />
          )
        })}
      </EquipePositionsWrapper>
    </div>
  )
}

export const Equipe = styled(EquipeUnstyled)`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 40px;
`

export const YearFrase = styled.h3`
  text-align: center;
  width: 90%;
  margin: 0 auto 24px;
`
