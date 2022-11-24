import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'

import { useHeaderContext } from '../../contexts/HeaderContext'
import { useIsOnScreen } from '../../hooks/useIsOnScreen'

import { GetStaticProps } from 'next'
import { Footer } from '../../components/Footer'
import { ScrollArrow } from '../../components/ScrollArrow'
import {
  PrototipoData,
  prototiposProvider
} from '../../providers/prototiposProvider'
import {
  CarData,
  Container,
  ContentImageWrapper,
  ContentText,
  ContentTitle,
  DataWrapper,
  DTecWrapper,
  GeneralPosition,
  ParagraphPositions,
  Position,
  PositionsWrapper,
  RowWrapper,
  Section,
  SectionContent,
  SectionStartContent,
  SubsystemTitle,
  Subtitle,
  Title
} from '../../styles/pages/Prototipos'

type Prototipos = 'NK319' | 'NK218' | 'Kayran'

export async function getStaticPaths() {
  const paths = [
    { params: { prototipo: 'Kayran' } },
    { params: { prototipo: 'NK218' } },
    { params: { prototipo: 'NK319' } }
  ]
  return { paths: paths || [], fallback: false }
}

export const getStaticProps: GetStaticProps = async context => {
  const prototipo = context.params.prototipo as Prototipos
  const prototipoData: PrototipoData = prototiposProvider[prototipo]
  return {
    props: prototipoData
  }
}

const margin_error = 50
const change_direction_margin = 50
var scroll_flag = false
var lastScrollTop = 0
var direction_onchange = 'down'

const Prototipo: React.FC = (props: PrototipoData) => {
  const router = useRouter()
  const { prototipo } = router.query as { prototipo: Prototipos }

  const { toggleColor } = useHeaderContext()
  const { elementRef: sectionStartRef, isOnScreen } = useIsOnScreen(0.01)
  const blackSection = useRef<HTMLDivElement>(null)

  useEffect(() => {
    toggleColor()
  }, [isOnScreen])

  useEffect(function mount() {
    function onScroll() {
      if (!blackSection) return

      var aux_direction = 'down'
      var st = window.pageYOffset || document.documentElement.scrollTop
      if (st > lastScrollTop) {
        aux_direction = 'down'
      } else {
        aux_direction = 'up'
      }
      lastScrollTop = st <= 0 ? 0 : st

      const element = blackSection.current.getBoundingClientRect()
      const elementTop = element.top
      const elementHeight = element.height

      if (
        (!scroll_flag &&
          ((elementTop < margin_error && elementTop > -margin_error) ||
            (elementTop * -1 > elementHeight - margin_error &&
              elementTop * -1 < elementHeight + margin_error))) ||
        (scroll_flag &&
          aux_direction !== direction_onchange &&
          ((elementTop > margin_error &&
            elementTop < margin_error + change_direction_margin) ||
            (elementTop < -margin_error &&
              elementTop > -margin_error - change_direction_margin) ||
            (elementTop * -1 >
              elementHeight - margin_error - change_direction_margin &&
              elementTop * -1 < elementHeight - margin_error) ||
            (elementTop * -1 <
              elementHeight + margin_error + change_direction_margin &&
              elementTop * -1 > elementHeight + margin_error)))
      ) {
        window.requestAnimationFrame(() => {
          direction_onchange = aux_direction
          scroll_flag = true
          toggleColor()
        })
      } else if (
        scroll_flag &&
        (elementTop > margin_error || elementTop < -margin_error) &&
        (elementTop * -1 < elementHeight - margin_error ||
          elementTop * -1 > elementHeight + margin_error)
      ) {
        scroll_flag = false
      }
    }

    window.addEventListener('scroll', onScroll)

    return function unMount() {
      window.removeEventListener('scroll', onScroll)
    }
  })

  return (
    <>
      <Head>
        <title>Tesla UFMG | {prototipo}</title>
      </Head>
      <Container>
        <Section
          id="start"
          ref={sectionStartRef}
          withBackground
          car={prototipo as Prototipos}
        >
          <SectionStartContent
            left={props.sectionStart.left}
            top={props.sectionStart.top}
          >
            <Title>{prototipo?.toUpperCase()}</Title>
            <Subtitle>
              {props.positions.general}° Lugar geral {props.year}
            </Subtitle>
          </SectionStartContent>

          <ScrollArrow to="positions" direction="down" color="white" />
        </Section>

        <Section id="positions">
          <SectionContent noPadding larger>
            <RowWrapper>
              <div>
                {props.positions.text.map((t, i) => (
                  <ParagraphPositions key={i}>{t}</ParagraphPositions>
                ))}
              </div>
              <div>
                <GeneralPosition position={props.positions.general} />
                <PositionsWrapper>
                  {props.positions.categories.map((category, index) => (
                    <Position
                      key={category.name}
                      category={category.name}
                      position={category.position}
                      lastItem={index + 1 === props.positions.categories.length}
                      index={index}
                    />
                  ))}
                </PositionsWrapper>
              </div>
            </RowWrapper>
          </SectionContent>

          <ScrollArrow to="start" direction="up" color="black" />
          <ScrollArrow to="data" direction="down" color="black" />
        </Section>

        <Section id="data" black ref={blackSection}>
          <SectionContent noPadding larger>
            <RowWrapper section templateRows>
              <DTecWrapper>
                <Image
                  src={
                    '/assets/images/prototipos/' +
                    prototipo.toLocaleLowerCase() +
                    '/' +
                    props.especifications.dtec
                  }
                  layout="fill"
                />
              </DTecWrapper>
              <DataWrapper>
                {props.especifications.data.map(d => (
                  <CarData key={d.info} info={d.info} data={d.data} />
                ))}
              </DataWrapper>
            </RowWrapper>
          </SectionContent>

          <ScrollArrow to="positions" direction="up" color="white" />
          {props.subsystems && (
            <ScrollArrow to="content" direction="down" color="white" />
          )}
        </Section>

        {props.subsystems && (
          <Section id="content">
            <SectionContent>
              {props.subsystems.map((content, i) => {
                if (content.type === 'title')
                  return <ContentTitle key={i}>{content.content}</ContentTitle>
                else if (content.type === 'subsystem')
                  return (
                    <SubsystemTitle key={i}>{content.content}</SubsystemTitle>
                  )
                else if (content.type === 'text')
                  return <ContentText key={i}>{content.content}</ContentText>
                else if (content.type === 'image') {
                  if (content.content.length > 1) {
                    return (
                      <RowWrapper key={i}>
                        {content.content.map(image => (
                          <ContentImageWrapper key={image}>
                            <Image
                              src={
                                '/assets/images/prototipos/' +
                                prototipo.toLocaleLowerCase() +
                                '/' +
                                image
                              }
                              layout="fill"
                            />
                          </ContentImageWrapper>
                        ))}
                      </RowWrapper>
                    )
                  } else {
                    return (
                      <ContentImageWrapper key={i}>
                        <Image
                          src={
                            '/assets/images/prototipos/' +
                            prototipo.toLocaleLowerCase() +
                            '/' +
                            content.content[0]
                          }
                          layout="fill"
                        />
                      </ContentImageWrapper>
                    )
                  }
                }
              })}
            </SectionContent>

            <ScrollArrow to="data" direction="up" color="black" />
          </Section>
        )}

        <Footer />
      </Container>
    </>
  )
}

export default Prototipo
