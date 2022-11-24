import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { useHeaderContext } from '../../contexts/HeaderContext'

import { Footer } from '../../components/Footer'
import {
  Container,
  GalerieImage,
  GalerieImagesWrapper,
  ImageModal,
  Section,
  SectionContent,
  Title,
  Years
} from '../../styles/pages/Galeria'

import { GaleriaProvider } from '../../providers/galeriaProvider'

export async function getStaticPaths() {
  const paths = [
    { params: { year: '2020' } },
    { params: { year: '2019' } },
    { params: { year: '2018' } },
    { params: { year: '2017' } }
  ]
  return { paths: paths || [], fallback: false }
}

export const getStaticProps: GetStaticProps = async context => {
  const year = context.params.year as Years
  const yearPhotos: string[] = GaleriaProvider[year]
  return {
    props: { photos: yearPhotos }
  }
}

const GaleriaAno: React.FC = ({ photos }: { photos: string[] }) => {
  const router = useRouter()
  const { year } = router.query

  const { handleColor } = useHeaderContext()

  const [openImage, setOpenImage] = useState<string>()

  useEffect(() => {
    handleColor('black')
  }, [])

  return (
    <>
      <Head>
        <title>Tesla UFMG | Galeria {year}</title>
      </Head>
      <Container>
        <Section>
          <SectionContent>
            <Title>{year}</Title>
            {year && typeof year === 'string' && (
              <GalerieImagesWrapper>
                {photos.map(path => (
                  <GalerieImage
                    year={year}
                    imagePath={path}
                    onClick={() => setOpenImage(path)}
                  />
                ))}
              </GalerieImagesWrapper>
            )}
          </SectionContent>
        </Section>

        <Footer />
      </Container>

      {openImage && (
        <ImageModal
          year={year as string}
          imagePath={openImage}
          close={() => setOpenImage(undefined)}
        />
      )}
    </>
  )
}

export default GaleriaAno
