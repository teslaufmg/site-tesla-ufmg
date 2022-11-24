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
  ImageWrapper,
  ImagesContainer
} from '../styles/pages/Parceiros'
import { parceirosProvider } from '../providers/parceirosProvider'

const Parceiros: React.FC = () => {
  const { handleColor } = useHeaderContext()

  useEffect(() => {
    handleColor('black')
  }, [])

  return (
    <>
      <Head>
        <title>Tesla UFMG | Parceiros</title>
      </Head>
      <Container>
        <Section>
          <SectionContent>
            <Title>PARCEIROS</Title>
            <div>
              {parceirosProvider.map(category => {
                return (
                  <div>
                    <Subtitle>{category.category}</Subtitle>
                    <ImagesContainer>
                      {category.partners.map(partner => {
                        return (
                          <ImageWrapper 
                            category={category.category}
                            path={partner.path} 
                            title={partner.title} 
                            description={partner.description} 
                            text={partner.text} 
                            to={partner.to} 
                            social={partner.social}
                          />
                        )
                      })}
                    </ImagesContainer>
                  </div>
                )
              })}
            </div>
          </SectionContent>
        </Section>

        <Footer />
      </Container>
    </>
  )
}

export default Parceiros
