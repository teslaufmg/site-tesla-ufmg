import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'

import { useHeaderContext } from '../contexts/HeaderContext'
import { useIsOnScreen } from '../hooks/useIsOnScreen'

import { Footer } from '../components/Footer'
import { ScrollArrow } from '../components/ScrollArrow'
import { competicaoProvider } from '../providers/competicaoProvider'
import {
  Container,
  ContentTitle,
  ImageWrapper,
  Paragraph,
  Points,
  ProvasBox,
  ProvasTitle,
  RowContent,
  Section,
  SectionContent,
  SectionStartContent,
  SectionTitle,
  Title,
  VideoWrapper
} from '../styles/pages/Competicao'

const Competicao: React.FC = () => {
  const { toggleColor } = useHeaderContext()
  const { elementRef: sectionStartRef, isOnScreen } = useIsOnScreen(0.01)

  useEffect(() => {
    toggleColor()
  }, [isOnScreen])

  return (
    <>
      <Head>
        <title>Tesla UFMG | A Competicao</title>
      </Head>
      <Container>
        <Section ref={sectionStartRef} withBackground>
          <SectionStartContent>
            <Title>A COMPETIÇÃO</Title>
          </SectionStartContent>

          <ScrollArrow to="content" direction="down" color="white" />
        </Section>
        <Section id="content">
          <SectionContent>
            <RowContent columnsTemplate="2fr 3fr">
              <ImageWrapper objectFit="contain">
                <Image
                  src="/assets/images/competicao/logo-sae.png"
                  layout="fill"
                />
              </ImageWrapper>
              <div>
                <ContentTitle textAlign="end">O que é?</ContentTitle>
                {competicaoProvider.o_que_e.map((item, index) => (
                  <Paragraph
                    textAlign="end"
                    margin={index < competicaoProvider.o_que_e.length - 1}
                  >
                    {item}
                  </Paragraph>
                ))}
              </div>
            </RowContent>
            <div>
              <ContentTitle>O evento</ContentTitle>
              {competicaoProvider.evento.map((item, index) => (
                <Paragraph
                  margin={index < competicaoProvider.evento.length - 1}
                >
                  {item}
                </Paragraph>
              ))}
            </div>
            <ImageWrapper borderRadius>
              <Image src="/assets/images/competicao/equipe.png" layout="fill" />
            </ImageWrapper>
            <RowContent>
              <div>
                <ContentTitle>Histórico</ContentTitle>
                {competicaoProvider.historico.map((item, index) => (
                  <Paragraph
                    margin={index < competicaoProvider.historico.length - 1}
                  >
                    {item}
                  </Paragraph>
                ))}
              </div>
              <div>
                <ContentTitle>Por que participar?</ContentTitle>
                {competicaoProvider.participar.map((item, index) => (
                  <Paragraph
                    margin={index < competicaoProvider.participar.length - 1}
                  >
                    {item}
                  </Paragraph>
                ))}
              </div>
            </RowContent>

            <SectionTitle>PROVAS ESTÁTICAS</SectionTitle>
            {competicaoProvider.estaticas.map(item => {
              if (item.length > 1) {
                return (
                  <RowContent>
                    {item.map(p => {
                      return (
                        <ProvasBox>
                          <ProvasTitle>{p.title}</ProvasTitle>
                          <Paragraph>{p.text}</Paragraph>
                          <Points>{p.points}</Points>
                        </ProvasBox>
                      )
                    })}
                  </RowContent>
                )
              }
              return (
                <ProvasBox>
                  <ProvasTitle>{item[0].title}</ProvasTitle>
                  <Paragraph>{item[0].text}</Paragraph>
                  <Points>{item[0].points}</Points>
                </ProvasBox>
              )
            })}

            <SectionTitle>PROVAS DINÂMICAS</SectionTitle>
            {competicaoProvider.dinamicas.map(item => {
              if (item.length > 1) {
                return (
                  <RowContent>
                    {item.map(p => {
                      return (
                        <ProvasBox>
                          <ProvasTitle>{p.title}</ProvasTitle>
                          <Paragraph>{p.text}</Paragraph>
                          <Points>{p.points}</Points>
                        </ProvasBox>
                      )
                    })}
                  </RowContent>
                )
              }
              return (
                <ProvasBox>
                  <ProvasTitle>{item[0].title}</ProvasTitle>
                  <Paragraph>{item[0].text}</Paragraph>
                  <Points>{item[0].points}</Points>
                </ProvasBox>
              )
            })}

            <SectionTitle>VÍDEO</SectionTitle>
            <Paragraph margin>{competicaoProvider.video.text}</Paragraph>
            <VideoWrapper videoURL={competicaoProvider.video.url} />
          </SectionContent>
        </Section>

        <Footer />
      </Container>
    </>
  )
}

export default Competicao
