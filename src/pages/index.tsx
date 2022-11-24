import Head from 'next/head'
import { useEffect } from 'react'

import { Button } from '../components/Button'
import { Footer } from '../components/Footer'
import { Section } from '../components/Section'
import {
  Container,
  ContentWrapper,
  ParceirosButtonsWrapper,
  PrototiposWrapper,
  SectionWrapper,
  Text,
  Title
} from '../styles/pages/Home'

import { useHeaderContext } from '../contexts/HeaderContext'

const Home: React.FC = () => {
  const { handleColor } = useHeaderContext()

  useEffect(() => {
    handleColor('white')
  }, [])

  return (
    <>
      <Head>
        <title>Tesla UFMG | Home</title>
      </Head>
      <Container>
        <SectionWrapper>
          <Section sectionId="historia" backgroundImage="section1.jpg">
            <ContentWrapper marginTop="26vh">
              <Title>BEM-VINDOS!</Title>
              <Text>Já conhece nossa equipe?</Text>
              <Button width={200}>CONTE-ME MAIS</Button>
            </ContentWrapper>
          </Section>

          <Section sectionId="prototipos" backgroundImage="section2.jpg">
            <PrototiposWrapper>
              <ContentWrapper>
                <Title className="prototipos-title">AS MÁQUINAS</Title>
              </ContentWrapper>
              <ContentWrapper>
                <Text textAlign="center">
                  Explore nossos protótipos e saiba a história por trás de cada
                  um deles!
                </Text>
                <Button width={150}>CONHEÇA</Button>
              </ContentWrapper>
            </PrototiposWrapper>
          </Section>

          <Section sectionId="equipe" backgroundImage="section3.jpg">
            <ContentWrapper marginTop="54vh" align="flex-start">
              <Title>A EQUIPE</Title>
              <Text>
                Conheça as mentes
                <br /> por trás desse projeto
              </Text>
              <Button width={170}>SAIBA MAIS</Button>
            </ContentWrapper>
          </Section>

          <Section sectionId="parceiros" backgroundImage="section4.jpg">
            <ContentWrapper marginTop="48vh" align="flex-start">
              <Title>PARCEIROS</Title>
              <Text maxWidth="530px">
                Veja quais são as empresas que ajudam a equipe a alcançar os
                ótimos resultados
              </Text>
              <ParceirosButtonsWrapper>
                <Button width={220}>PATROCINADORES</Button>
                <Button width={220}>QUERO AJUDAR</Button>
              </ParceirosButtonsWrapper>
            </ContentWrapper>
          </Section>

          <Footer />
        </SectionWrapper>
      </Container>
    </>
  )
}

export default Home
