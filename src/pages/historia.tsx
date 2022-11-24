import Head from 'next/head'
import { useEffect } from 'react'

import { useHeaderContext } from '../contexts/HeaderContext'
import { useIsOnScreen } from '../hooks/useIsOnScreen'

import { Footer } from '../components/Footer'
import { ScrollArrow } from '../components/ScrollArrow'
import {
  Container,
  ContentContainer,
  ContentText,
  ContentTitle,
  Equipe,
  ImageStart,
  ImageWarpper,
  ImageWrapper,
  Section,
  SectionContent,
  StartSectionContainer,
  Subtitle,
  Title,
  VideoWrapper,
  YearFrase
} from '../styles/pages/Historia'

import { historiaProvider } from '../providers/historiaProvider'

const Historia: React.FC = () => {
  const { toggleColor } = useHeaderContext()
  const { elementRef: imageStartRef, isOnScreen } = useIsOnScreen()

  useEffect(() => {
    toggleColor()
  }, [isOnScreen])

  return (
    <>
      <Head>
        <title>Tesla UFMG | História</title>
      </Head>
      <Container>
        <Section>
          <StartSectionContainer>
            <ImageWarpper ref={imageStartRef}>
              <ImageStart
                src="/assets/images/historia/historia-inicio.jpg"
                layout="fill"
              />
            </ImageWarpper>
            <SectionContent>
              <Title>QUEM SOMOS?</Title>
              <Subtitle>
                Somos uma equipe de competição da Universidade Federal de Minas
                Gerais, sediada em Belo Horizonte e composta por alunos de
                graduação de diversas áreas do conhecimento da Universidade.
              </Subtitle>
            </SectionContent>

            <ScrollArrow
              to={historiaProvider[0].id}
              direction="down"
              color="black"
            />
          </StartSectionContainer>
        </Section>
        {historiaProvider.map((section, index) => {
          return (
            <Section id={section.id}>
              <ContentContainer
                start={index === 0}
                end={index + 1 === historiaProvider.length}
              >
                {section.content.map(content => {
                  if (content.type === 'equipe') {
                    return (
                      <Equipe
                        year={content.year}
                        captain={content.captain}
                        positions={content.positions}
                      />
                    )
                  } else if (content.type === 'video') {
                    return <VideoWrapper videoURL={content.videoURL} />
                  } else if (content.type === 'frase') {
                    return <YearFrase>{content.text}</YearFrase>
                  } else if (content.type === 'text') {
                    return <ContentText>{content.text}</ContentText>
                  } else if (content.type === 'title') {
                    return <ContentTitle>{content.text}</ContentTitle>
                  } else if (content.type === 'image') {
                    return (
                      <ImageWrapper
                        imagePath={content.imagePath}
                        legend={content.legend}
                      />
                    )
                  }
                })}
              </ContentContainer>
            </Section>
          )
        })}

        <Footer />
      </Container>
    </>
  )
}

export default Historia
