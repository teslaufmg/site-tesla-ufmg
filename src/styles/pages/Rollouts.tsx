import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
`

export const Section = styled.section`
  min-height: 100%;

  padding: 20px;

  display: flex;

  position: relative;
`

export const SectionContent = styled.div`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;

  padding-top: 40px;

  display: flex;
  flex-direction: column;

  @media ${props => props.theme.breakpoints.tablet} {
    max-width: 70%;
    padding-top: 80px;
  }

  @media ${props => props.theme.breakpoints.laptop} {
    max-width: 60%;
  }
`

export const Title = styled.h1`
  font-size: 2rem;
  border-bottom: 1px solid ${props => props.theme.colors['gray-600']};

  margin-bottom: 24px;

  @media ${props => props.theme.breakpoints.laptop} {
    font-size: 4rem;
  }

  @media ${props => props.theme.breakpoints.laptopL} {
    font-size: 6rem;
  }
`

export const Subtitle = styled.h4`
  font-size: 1.5rem;
  text-transform: capitalize;

  &:not(:first-child) {
    margin-top: 16px;
  }
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.laptop} {
    font-size: 2rem;
    margin-bottom: 16px;
  }

  @media ${props => props.theme.breakpoints.laptopL} {
    font-size: 3rem;
  }
`

export const VideoTitle = styled.p`
  font-size: 1rem;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.laptop} {
    font-size: 1rem;
  }

  @media ${props => props.theme.breakpoints.laptopL} {
    font-size: 1.5rem;
  }
`

const VideoUnstyled = ({
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

export const Video = styled(VideoUnstyled)`
  position: relative;

  width: 100%;
  padding-bottom: 56.25%;

  margin-bottom: 16px;

  & > iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    border: none;
  }
`