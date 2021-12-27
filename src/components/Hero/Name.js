import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import useDimensions from 'react-cool-dimensions'
import theme from '../../theme'
import gsap from 'gsap'
import { useMedia } from 'react-media'

// Assets
import Video from '../../assets/doctor.mp4'

const Name = () => {
  const title = useRef(null)

  const { observe, height } = useDimensions()

  const isMobile = useMedia({ query: '(max-width: 425px)' })

  let tl = gsap.timeline({ delay: 0.8 })

  useEffect(() => {
    const textTop = title.current.children[0].children[0]
    const textBottom = title.current.children[1].children[0]
    const video = title.current.children[1].children[1]

    // video?.children[1]?.play()

    const duration = 1.6
    const ease = 'expo.out'

    tl.from(textTop, {
      duration,
      y: '150%',
      ease,
    })
      .from(
        textBottom,
        {
          duration,
          y: '150%',
          ease,
        },
        `-=${duration}`
      )
      .from(
        video,
        {
          duration,
          y: isMobile ? '' : '150%',
          display: isMobile ? 'none' : '',
          opacity: isMobile ? 0 : '',
          ease,
        },
        `-=${isMobile ? duration / 2 : duration}`
      )
  }, [])

  return (
    <StyledName videoHeight={height} ref={title}>
      <div className="line">
        <div className="text">DOĞUŞ CAN</div>
      </div>
      <div className="line">
        <div className="text" ref={observe}>
          ÇALLI
        </div>
        <div className="video">
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video muted autoPlay loop>
            <source src={Video} type="video/mp4" />
          </video>
        </div>
      </div>
    </StyledName>
  )
}

const StyledName = styled.h1`
  margin-top: -50px;
  margin-left: -11px;

  .line {
    overflow: hidden;
    padding: 1.5rem 0;
    display: flex;
    align-items: center;

    &:last-child {
      margin-top: -1.5rem;
    }

    .text {
      font-size: 10.417vw;
      line-height: 1;
    }

    .video {
      height: ${props => props.videoHeight * 0.68}px;
      margin-left: 2.708vw;

      video {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  @media (max-width: ${theme.breakpoint.tablet}) {
    margin-top: -40px;
    margin-left: -6px;

    .line {
      .text {
        font-size: 13.021vw;
      }
    }
  }

  @media (max-width: ${theme.breakpoint.mobileL}) {
    margin-top: -22px;
    margin-left: unset;

    .line {
      padding: 1rem 0;
      align-items: flex-start;

      &:last-child {
        margin-top: -12px;
      }

      .text {
        font-size: 14.118vw;
      }

      .video {
        height: ${props => props.videoHeight * 2}px;
        width: 100%;
      }
    }
  }
`

export default Name
