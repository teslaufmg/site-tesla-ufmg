import { useEffect } from 'react'
import Head from 'next/head'

import { useHeaderContext } from '../contexts/HeaderContext'

import { Footer } from '../components/Footer'
import {
  Container,
  Section,
  SectionContent,
  Title,
  Subtitle,
  VideoTitle,
  Video
} from '../styles/pages/Rollouts'
import { RolloutsProvider } from '../providers/rolloutsProvider'

const Rollouts: React.FC = () => {
  const { handleColor } = useHeaderContext()

  useEffect(() => {
    handleColor('black')
  }, [])

  return (
    <>
      <Head>
        <title>Tesla UFMG | Rollouts</title>
      </Head>
      <Container>
        <Section>
          <SectionContent>
            <Title>ROLLOUTS</Title>
            {RolloutsProvider.map(car => {
              return (
                <>
                  <Subtitle>{car.car}</Subtitle>
                  {car.video.map(video => {
                    return (
                      <>
                        {video.title && <VideoTitle>{video.title}</VideoTitle>}
                        <Video videoURL={video.url} />
                      </>
                    )
                  })}
                </>
              )
            })}
          </SectionContent>
        </Section>

        <Footer />
      </Container>
    </>
  )
}

export default Rollouts
