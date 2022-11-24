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
      backgroundImage: "url('/assets/images/competicao/competicao-inicio.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
`

export const SectionStartContent = styled.div`
  margin-top: 30%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  text-align: center;

  color: ${props => props.theme.colors.white};

  @media ${props => props.theme.breakpoints.tablet} {
    margin-bottom: 40px;
    margin-left: 40px;

    align-items: flex-start;
    justify-content: flex-end;
    text-align: end;
  }

  @media ${props => props.theme.breakpoints.laptop} {
    margin-left: 80px;
  }
`

export const Title = styled.h1`
  font-size: 2rem;
  line-height: 1;

  @media ${props => props.theme.breakpoints.mobileM} {
    font-size: 3rem;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 4rem;
  }

  @media ${props => props.theme.breakpoints.laptop} {
    font-size: 5rem;
  }

  @media ${props => props.theme.breakpoints.laptopL} {
    font-size: 8rem;
  }
`

export const SectionContent = styled.div`
  width: 100%;
  max-width: 80%;
  margin: auto;

  padding-top: 40px;

  & > div {
    margin-bottom: 24px;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    max-width: 70%;
    padding-top: 80px;
  }

  @media ${props => props.theme.breakpoints.laptop} {
    max-width: 60%;
  }
`

export const RowContent = styled.div<{ columnsTemplate?: string }>`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-template-columns: ${props => props.columnsTemplate || '1fr 1fr'};
    gap: 32px;
  }
`

export const ContentTitle = styled.h4<{ textAlign?: 'start' | 'end' }>`
  text-align: ${props => props.textAlign || 'start'};

  margin-bottom: 16px;
  font-size: 1.5rem;

  @media ${props => props.theme.breakpoints.mobileL} {
    font-size: 2.5rem;
    margin-bottom: 24px;
  }
`

export const Paragraph = styled.p<{
  textAlign?: 'start' | 'end'
  margin?: boolean
}>`
  text-align: ${props => props.textAlign || 'start'};

  font-size: 1rem;
  color: ${props => props.theme.colors.text};

  margin-bottom: ${props => props.margin && '16px'};
`

export const ImageWrapper = styled.div<{
  objectFit?: 'contain' | 'fill'
  borderRadius?: boolean
}>`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  border-radius: ${props => props.borderRadius && '56px'};
  overflow: hidden;

  & img {
    object-fit: ${props => props.objectFit || 'fill'};
  }
`

export const SectionTitle = styled.h2`
  margin-bottom: 24px;
  font-size: 2rem;
  font-family: Gilroy-Light;
  font-weight: 400;
  text-align: center;

  @media ${props => props.theme.breakpoints.mobileL} {
    font-size: 3rem;
    margin-bottom: 32px;
  }
`

export const ProvasBox = styled.div`
  width: 100%;
  padding: 24px;

  border-radius: 56px;
  border: 1px solid ${props => props.theme.colors.black};

  @media ${props => props.theme.breakpoints.mobileL} {
    padding: 40px;
  }
`

export const ProvasTitle = styled.h5`
  margin-bottom: 8px;
  font-size: 1rem;

  @media ${props => props.theme.breakpoints.mobileL} {
    font-size: 1.5rem;
  }
`

export const Points = styled.p`
  text-align: end;

  font-family: Gilroy-Extrabold;
  font-size: 1rem;
  color: ${props => props.theme.colors.primary};

  @media ${props => props.theme.breakpoints.mobileL} {
    font-size: 1.5rem;
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
