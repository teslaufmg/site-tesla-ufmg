import styled from 'styled-components'

import { ScrollArrow } from '../ScrollArrow'
import { SectionDots } from '../SectionDots'

const SectionUnstyled = styled.section`
  width: 100%;
  height: 100%;

  flex: none;

  scroll-snap-align: start;

  padding: 30px;

  position: relative;

  @media ${props => props.theme.breakpoints.tablet} {
    padding: 40px;
  }
`

const SectionComponent = ({
  children,
  className,
  sectionId
}: {
  children: React.ReactNode
  className?: string
  sectionId: string
}) => {
  const ids = ['historia', 'prototipos', 'equipe', 'parceiros']
  return (
    <SectionUnstyled className={className} id={sectionId}>
      <SectionDots dots={ids} selected={sectionId} />
      {children}
      {sectionId !== ids[0] && (
        <ScrollArrow to={ids[ids.indexOf(sectionId) - 1]} direction="up" />
      )}
      {sectionId !== ids[ids.length - 1] && (
        <ScrollArrow to={ids[ids.indexOf(sectionId) + 1]} direction="down" />
      )}
    </SectionUnstyled>
  )
}

export const Section = styled(SectionComponent)<{ backgroundImage: string }>`
  background-image: url(${props =>
    '/assets/images/home/' + props.backgroundImage});
  background-size: cover;
  background-position: center;
`

export const SectionFooter = styled(SectionUnstyled)`
  height: auto;

  background-color: ${props => props.theme.colors.black};
`
