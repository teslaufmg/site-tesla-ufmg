import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import styled from 'styled-components'

export type Years = '2020' | '2019' | '2018' | '2017'

export const Container = styled.div`
  height: 100%;
`

export const Section = styled.section`
  min-height: 100%;

  padding: 20px;

  display: flex;

  position: relative;
`

export const SectionContent = styled.div`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;

  padding-top: 40px;

  display: flex;
  flex-direction: column;

  @media ${props => props.theme.breakpoints.tablet} {
    max-width: 70%;
    padding-top: 80px;
  }

  @media ${props => props.theme.breakpoints.laptop} {
    max-width: 60%;
  }
`

export const Title = styled.h1`
  font-size: 2rem;
  border-bottom: 1px solid ${props => props.theme.colors['gray-600']};

  margin-bottom: 24px;

  @media ${props => props.theme.breakpoints.laptop} {
    font-size: 4rem;
  }

  @media ${props => props.theme.breakpoints.laptopL} {
    font-size: 6rem;
  }
`

export const YearsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
`

const YearBoxUnstyled = ({
  className,
  year,
  to
}: {
  className?: string
  year: Years
  to: string
}) => {
  return (
    <div className={className}>
      <Image
        src={'/assets/images/galeria/' + year + '_capa.jpg'}
        layout="fill"
      />
      <Link href={to}>
        <a>{year}</a>
      </Link>
    </div>
  )
}

export const YearBox = styled(YearBoxUnstyled)`
  border-radius: 32px;
  overflow: hidden;

  position: relative;

  width: 100%;
  min-height: 200px;
  padding-bottom: calc(56.25% / 2 - 12px);

  & img {
    object-fit: cover;
  }

  & > a {
    position: absolute;

    width: 100%;
    height: 100%;

    color: ${props => props.theme.colors.white};
    font-size: 2rem;

    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    min-height: 250px;
    padding-bottom: 56.25%;
  }
`

export const GalerieImagesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;

  @media ${props => props.theme.breakpoints.mobileL} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
`

const GalerieImageUnstyled = ({
  className,
  year,
  imagePath,
  onClick
}: {
  className?: string
  year: string
  imagePath?: string
  onClick?: () => void
}) => {
  return (
    <div className={className} onClick={onClick}>
      {imagePath && (
        <Image
          src={'/assets/images/galeria/' + year + '/' + imagePath}
          layout="fill"
        />
      )}
    </div>
  )
}

export const GalerieImage = styled(GalerieImageUnstyled)`
  width: 100%;
  padding-bottom: 56.25%;
  background-color: ${props => props.theme.colors['gray-600']};

  position: relative;

  cursor: pointer;

  & img {
    object-fit: cover;
  }
`

const ImageModalUnstyled = ({
  className,
  year,
  imagePath,
  close
}: {
  className?: string
  year: string
  imagePath?: string
  close: () => void
}) => {
  const modal = useRef(null)

  useEffect(() => {
    modal.current.addEventListener('click', function (e) {
      if (e.target == this) close()
    })
  }, [])

  return (
    <div className={className} ref={modal}>
      <div className="content">
        <GalerieImage year={year} imagePath={imagePath} />
      </div>
    </div>
  )
}

export const ImageModal = styled(ImageModalUnstyled)`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: #000000c2;

  display: flex;
  align-items: center;
  justify-content: center;

  & .content {
    max-width: 800px;
    width: 100%;
    margin: 24px;

    & > div {
      cursor: unset;
    }
  }
`
