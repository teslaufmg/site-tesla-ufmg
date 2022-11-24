import Head from 'next/head'
import { useEffect } from 'react'

import { useHeaderContext } from '../../contexts/HeaderContext'

import { Footer } from '../../components/Footer'
import { GaleriaProvider } from '../../providers/galeriaProvider'
import {
  Container,
  Section,
  SectionContent,
  Title,
  YearBox,
  Years,
  YearsWrapper
} from '../../styles/pages/Galeria'

const provider = Object.keys(GaleriaProvider) as Years[]

const Galeria: React.FC = () => {
  const { handleColor } = useHeaderContext()

  useEffect(() => {
    handleColor('black')
  }, [])

  return (
    <>
      <Head>
        <title>Tesla UFMG | Galeria</title>
      </Head>
      <Container>
        <Section>
          <SectionContent>
            <Title>GALERIA</Title>
            <YearsWrapper>
              {provider.map(year => (
                <YearBox year={year} to={'/galeria/' + year} />
              ))}
            </YearsWrapper>
          </SectionContent>
        </Section>

        <Footer />
      </Container>
    </>
  )
}

export default Galeria
