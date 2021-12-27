import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import theme from '../../theme'
import useOnScreen from '../../hooks/useOnScreen'
import gsap from 'gsap'

const Heading = () => {
  const heading = useRef(null)

  const [reveal, setReveal] = useState(false)

  const onScreen = useOnScreen(heading)

  useEffect(() => {
    if (onScreen) setReveal(onScreen)
  }, [onScreen])

  let tl = gsap.timeline()

  useEffect(() => {
    if (!reveal) return

    const textTop = heading.current.children[0].children[0]
    const textBottomFirst = heading.current.children[1].children[0]
    const textBottomSecond = heading.current.children[1].children[1]

    const duration = 2.4
    const ease = 'expo.out'

    tl.to([textTop, textBottomFirst, textBottomSecond], {
      duration,
      y: 0,
      ease,
      stagger: 0.1,
    })
  }, [reveal])

  return (
    <StyledHeading ref={heading}>
      <div className="line">
        <div className="text">YETENEK</div>
      </div>
      <div className="line">
        <div className="text">/</div>
        <div className="text">LERİM</div>
        <div />
      </div>
    </StyledHeading>
  )
}

const StyledHeading = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;

  .line {
    width: 100%;
    overflow: hidden;
    padding: 2.5rem 0;
    margin-top: -4rem;

    &:nth-child(1) {
      div {
        margin-right: -14vw;
      }
    }

    &:nth-child(2) {
      display: flex;

      div:first-child {
        margin-right: 7.292vw;
      }
    }

    .text {
      font-size: 15.625vw;
      line-height: 1;
      text-align: center;
      transform: translateY(150%);
    }
  }

  @media (max-width: ${theme.breakpoint.tablet}) {
    .line {
      padding: 1.25rem 0;
      margin-top: -1.875rem;

      .text {
        font-size: 13.021vw;
      }
    }
  }

  @media (max-width: ${theme.breakpoint.mobileL}) {
    .line {
      padding: 0.5rem 0;
      margin-top: -0.5rem;

      &:nth-child(1) {
        div {
          margin-right: -2.5vw;
        }
      }

      .text {
        font-size: 14.118vw;
      }
    }
  }
`

export default Heading
