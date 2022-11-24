import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { useHeaderContext } from '../../contexts/HeaderContext'

import { BiTimeFive } from 'react-icons/bi'
import { BsFillLightningFill } from 'react-icons/bs'
import { FaCog } from 'react-icons/fa'

import Link from 'next/link'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { years } from '../../providers/prototiposProvider'
import {
  BoxData,
  BoxDataWrapper,
  CarDescription,
  CarName,
  CarNameWrapper,
  CarWrapper,
  Container,
  PageTitle,
  Section,
  SectionContent,
  YearsRow
} from '../../styles/pages/Prototipos'

const Prototipos: React.FC = () => {
  const { handleColor } = useHeaderContext()

  const initialCarIndex = years.findIndex(y => y.initialYear)
  const [yearIndex, setYearIndex] = useState(initialCarIndex)

  useEffect(() => {
    handleColor('black')
  }, [])

  return (
    <>
      <Head>
        <title>Tesla UFMG | Prototipos</title>
      </Head>
      <Container>
        <Section>
          <SectionContent>
            <PageTitle>NOSSAS MÁQUINAS</PageTitle>
            <YearsRow
              years={years}
              initialCarIndex={initialCarIndex}
              onChangeYearIndex={index => setYearIndex(index)}
            />

            <CarWrapper>
              <CarNameWrapper>
                <CarName>{years[yearIndex].car}</CarName>
                <Button>
                  <Link href={years[yearIndex].to}>VER MAIS</Link>
                </Button>
              </CarNameWrapper>
              <Image
                src={
                  '/assets/images/prototipos/' +
                  years[yearIndex].car.toLowerCase() +
                  '/' +
                  years[yearIndex].image
                }
                layout="fill"
              />
              <CarDescription>{years[yearIndex].description}</CarDescription>
            </CarWrapper>
            <BoxDataWrapper>
              <BoxData
                Icon={BiTimeFive}
                data="0-100 Km/h"
                value={years[yearIndex].time}
              />
              <BoxData
                Icon={FaCog}
                data="Vel. Máx."
                value={years[yearIndex].velocity}
              />
              <BoxData
                Icon={BsFillLightningFill}
                data="Potência"
                value={years[yearIndex].potency}
              />
            </BoxDataWrapper>
          </SectionContent>
        </Section>

        <Footer />
      </Container>
    </>
  )
}

export default Prototipos
