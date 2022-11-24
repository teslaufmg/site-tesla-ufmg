import { MouseEvent, useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import { BiX } from 'react-icons/bi'
import { IoLogoFacebook, IoLogoInstagram, IoLogoYoutube } from 'react-icons/io'
import { Category, PopoverProps } from '../../providers/parceirosProvider'

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

export const Subtitle = styled.h4`
  font-size: 1.5rem;
  text-transform: capitalize;

  &:not(:first-child) {
    margin-top: 16px;
  }
  margin-bottom: 16px;

  @media ${props => props.theme.breakpoints.laptop} {
    font-size: 2rem;
  }

  @media ${props => props.theme.breakpoints.laptopL} {
    font-size: 3rem;
  }
`

const PopoverUnstyled = ({
  className,
  onClose,
  title,
  description,
  text,
  to,
  social
}: {
  className?: string
  onClose?: () => void
} & PopoverProps) => {
  const onClickBackground = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return (
    <div className={className} onClick={onClickBackground}>
      <div className="content">
        <div className="close">
          <BiX onClick={onClose} />
        </div>
        <h2>{title}</h2>
        <h6>{description}</h6>
        <p>{text}</p>
        <a href={to} target="_blank">
          {to}
        </a>
        <div className="social-media">
          {social.facebook && (
            <a href={social.facebook} target="_blank">
              <IoLogoFacebook />
            </a>
          )}
          {social.instagram && (
            <a href={social.instagram} target="_blank">
              <IoLogoInstagram />
            </a>
          )}
          {social.youtube && (
            <a href={social.youtube} target="_blank">
              <IoLogoYoutube />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export const Popover = styled(PopoverUnstyled)`
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: flex-start;
  justify-content: center;

  padding: 24px;
  overflow-x: auto;

  & .content {
    position: relative;

    background-color: ${props => props.theme.colors.white};
    max-width: 700px;
    padding: 24px;
    margin: auto;
    border-radius: 32px;
    border: 1px solid ${props => props.theme.colors.primary};

    & .close {
      width: 100%;
      display: flex;
      justify-content: flex-end;

      font-size: 2rem;

      & > svg {
        position: absolute;
        transform: translate(8px, -8px);
        cursor: pointer;
      }
    }

    & > h2 {
      font-size: 2rem;
    }

    & > h6 {
      font-family: Gilroy-Light;
      font-size: 1.25rem;
    }

    & > p {
      font-size: 1rem;

      margin: 16px 0;
    }

    & > a {
      font-family: Gilroy-Light;
      font-size: 1rem;
      text-decoration: underline;
    }

    & > .social-media {
      margin-top: 16px;
      font-size: 2rem;

      display: flex;
      gap: 8px;

      & > svg {
        cursor: pointer;
      }
    }
  }
`

const ImageWrapperUnstyled = ({ 
  className, 
  category, 
  path, 
  title, 
  description, 
  text, 
  to, 
  social 
}: { 
  className?: string
  category: Category
  path: string
} & PopoverProps) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  return (
    <div className={className}>
      <Image
        src={"/assets/images/parceiros/" + category + "/" + path}
        layout="fill"
        onClick={() => setIsPopoverOpen(true)}
      />
      {isPopoverOpen && (
        <Popover
          onClose={() => setIsPopoverOpen(false)}
          title={title}
          description={description}
          text={text}
          to={to}
          social={{
            facebook: social.facebook,
            instagram: social.instagram,
            youtube: social.youtube
          }}
        />
      )}
    </div>
  )
}

export const ImageWrapper = styled(ImageWrapperUnstyled)<{ category: Category }>`
  position: relative;
  margin: 0 auto;

  ${props =>
    props.category === 'diamante' && {
      width: '70%',
      maxWidth: '800px'
    }}

  ${props =>
    props.category === 'platina' && {
      width: '60%',
      maxWidth: '600px'
    }}

  ${props =>
    props.category === 'ouro' && {
      width: '40%',
      maxWidth: '400px',
      minWidth: '110px',
    }}

  ${props =>
    props.category === 'prata' && {
      width: '30%',
      maxWidth: '300px',
      minWidth: '100px',
    }}

  ${props =>
    props.category === 'bronze' && {
      width: '25%',
      maxWidth: '250px',
      minWidth: '90px',
    }}

  ${props =>
    props.category === 'parceiros' && {
      width: '20%',
      maxWidth: '200px',
      minWidth: '80px',
    }}

  ${props =>
    props.category === 'apoio' && {
      width: '20%',
      maxWidth: '200px',
      minWidth: '70px',
    }}

  & > span {
    cursor: pointer;
    position: unset !important;
    & > img {
      position: unset !important;
      height: unset !important;
    }
  }
`

export const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  margin-bottom: 24px;
`