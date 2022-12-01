import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
`

export const Section = styled.section<{ withBackground?: boolean }>`
  min-height: 100%;

  padding: 20px;

  display: flex;

  position: relative;

  ${props =>
    props.withBackground && {
      backgroundImage: "url('/assets/images/equipe/equipe-inicio.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
`

export const SectionStartContent = styled.div`
  margin-top: 20%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  text-align: center;

  color: ${props => props.theme.colors.white};

  @media ${props => props.theme.breakpoints.tablet} {
    max-width: 350px;
    margin-bottom: 40px;
    margin-left: auto;

    align-items: flex-end;
    justify-content: flex-end;
    text-align: end;
  }

  @media ${props => props.theme.breakpoints.laptop} {
    max-width: 620px;
  }

  @media ${props => props.theme.breakpoints.laptopL} {
    max-width: 1000px;
  }
`

export const Title = styled.h1`
  font-size: 2rem;
  line-height: 1;

  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 3rem;
  }

  @media ${props => props.theme.breakpoints.laptop} {
    font-size: 5rem;
  }

  @media ${props => props.theme.breakpoints.laptopL} {
    font-size: 8rem;
  }
`

export const Subtitle = styled.p`
  font-size: 1rem;
  line-height: 1;

  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 1.5rem;
  }

  @media ${props => props.theme.breakpoints.laptop} {
    font-size: 2rem;
  }

  @media ${props => props.theme.breakpoints.laptopL} {
    font-size: 3rem;
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

  & > iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    border: none;
  }
`

export const SectionVideoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 80%;
  margin: auto;

  @media ${props => props.theme.breakpoints.tablet} {
    max-width: 70%;
  }

  @media ${props => props.theme.breakpoints.laptop} {
    max-width: 60%;
  }
`

export const SectionContent = styled.div`
  width: 100%;
  max-width: 80%;
  margin: auto;

  padding-top: 40px;

  @media ${props => props.theme.breakpoints.tablet} {
    max-width: 70%;
    padding-top: 80px;
  }

  @media ${props => props.theme.breakpoints.laptop} {
    max-width: 60%;
  }
`

const CapitainUnstyled = ({
  className,
  name,
  year,
  imagePath
}: {
  className?: string
  name: string
  year: string
  imagePath?: string
}) => {
  return (
    <div className={className}>
      <div className="image-wrapper">
        <Image
          src={
            '/assets/images/equipe/' +
            (imagePath ? year + '/' + imagePath : 'default-profile.webp')
          }
          layout="fill"
        />
      </div>

      <div className="info-wrapper">
        <h3>CAPTIÃO</h3>
        <h6>{year}</h6>
        <p>{name}</p>
      </div>
    </div>
  )
}

export const Captain = styled(CapitainUnstyled)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media ${props => props.theme.breakpoints.tablet} {
    gap: 24px;
  }

  & > .image-wrapper {
    border-radius: 50%;
    overflow: hidden;
    width: 100px;

    @media ${props => props.theme.breakpoints.mobileL} {
      width: 120px;
    }

    @media ${props => props.theme.breakpoints.tablet} {
      width: 150px;
    }

    @media ${props => props.theme.breakpoints.laptop} {
      width: 200px;
    }

    & > span {
      position: unset !important;

      & > img {
        position: unset !important;
        width: 100% !important;
        height: 100% !important;
      }
    }
  }

  & > .info-wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  & > .info-wrapper h3 {
    font-size: 1.5rem;
    line-height: 0.75;

    @media ${props => props.theme.breakpoints.mobileL} {
      font-size: 2rem;
    }

    @media ${props => props.theme.breakpoints.tablet} {
      font-size: 2.5rem;
    }

    @media ${props => props.theme.breakpoints.laptop} {
      font-size: 4rem;
    }
  }

  & > .info-wrapper h6 {
    font-size: 1rem;
    line-height: 0.75;

    margin-bottom: 8px;
    margin-left: 4px;

    @media ${props => props.theme.breakpoints.tablet} {
      font-size: 1.5rem;
    }

    @media ${props => props.theme.breakpoints.laptop} {
      font-size: 2rem;
      margin-left: 8px;
    }
  }

  & > .info-wrapper p {
    font-size: 1rem;

    @media ${props => props.theme.breakpoints.mobileL} {
      font-size: 1.5rem;
    }

    @media ${props => props.theme.breakpoints.tablet} {
      font-size: 2rem;
    }

    @media ${props => props.theme.breakpoints.laptop} {
      font-size: 3rem;
    }
  }
`

export const SectorName = styled.h3`
  font-size: 1.5rem;
  margin: 24px 0;

  @media ${props => props.theme.breakpoints.mobileL} {
    font-size: 2rem;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 2.5rem;
    margin: 32px 0;
  }

  @media ${props => props.theme.breakpoints.laptop} {
    font-size: 4rem;
  }
`

const MemberUnstyled = ({
  className,
  name,
  role,
  imagePath,
  year
}: {
  className?: string
  name: string
  role: string
  imagePath?: string
  year: string
}) => {
  return (
    <div className={className}>
      <div className="image-wrapper">
        <Image
          src={
            '/assets/images/equipe/' +
            (imagePath ? year + '/' + imagePath : 'default-profile.webp')
          }
          layout="fill"
        />
      </div>
      <div>
        <h6>{name}</h6>
        <p>{role}</p>
      </div>
    </div>
  )
}

export const Member = styled(MemberUnstyled)`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 8px;
  text-align: center;

  width: -webkit-fill-available;
  max-width: 100px;

  margin: 0 auto;

  @media ${props => props.theme.breakpoints.tablet} {
    max-width: 120px;
  }

  @media ${props => props.theme.breakpoints.laptop} {
    max-width: 150px;
  }

  & > .image-wrapper {
    border-radius: 50%;
    overflow: hidden;
    width: 100%;

    & > span {
      position: unset !important;

      & > img {
        position: unset !important;
        width: 100% !important;
        height: 100% !important;
      }
    }
  }

  & h6 {
    font-size: 1rem;
    font-family: Gilroy-Light;

    @media ${props => props.theme.breakpoints.laptop} {
      font-size: 1.25rem;
    }
  }

  & p {
    font-size: 0.75rem;

    @media ${props => props.theme.breakpoints.laptop} {
      font-size: 1rem;
    }
  }
`

export const MemberWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media ${props => props.theme.breakpoints.mobileL} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
  }

  @media ${props => props.theme.breakpoints.laptop} {
    grid-template-columns: repeat(5, 1fr);
  }

  @media ${props => props.theme.breakpoints.laptopL} {
    grid-template-columns: repeat(6, 1fr);
  }
`
