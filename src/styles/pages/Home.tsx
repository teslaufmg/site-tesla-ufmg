import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
`

export const SectionWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  overflow-y: auto;
  scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
`

export const ContentWrapper = styled.div<{
  marginTop?: string
  align?: 'center' | 'flex-start'
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: ${props => props.marginTop ?? 0};

  width: 100%;
  gap: 10px;

  @media ${props => props.theme.breakpoints.mobileL} {
    align-items: ${props => props.align ?? 'center'};
  }

  @media ${props => props.theme.breakpoints.tablet} {
    width: 70%;
  }

  @media ${props => props.theme.breakpoints.laptop} {
    width: 50%;
  }
`

export const Title = styled.h1`
  color: ${props => props.theme.colors.white};

  font-size: 2rem;
  line-height: 0.8;

  @media ${props => props.theme.breakpoints.mobileL} {
    font-size: 3rem;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 4rem;
  }
`

export const Text = styled.p<{
  textAlign?: 'center' | 'start' | 'end'
  maxWidth?: string
}>`
  color: ${props => props.theme.colors.white};

  font-size: 1.1rem;
  line-height: 1;

  text-align: center;

  max-width: ${props => props.maxWidth ?? 'unset'};

  @media ${props => props.theme.breakpoints.mobileL} {
    font-size: 1.6rem;
    text-align: ${props => props.textAlign ?? 'start'};
  }

  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 2.2rem;
  }
`

export const PrototiposWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 10px;

  margin-top: 8vh;

  & .prototipos-title {
    line-height: 1.2;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    flex-direction: row;
  }
`

export const ParceirosButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 10px;

  @media ${props => props.theme.breakpoints.mobileL} {
    flex-direction: row;
    gap: 20px;
  }
`
