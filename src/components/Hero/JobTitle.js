import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import theme from '../../theme'
import gsap from 'gsap'

const JobTitle = () => {
  const jobTitle = useRef(null)

  let tl = gsap.timeline({ delay: 0.8 })

  useEffect(() => {
    const textTop = jobTitle.current.children[0].children[0]
    const textBottom = jobTitle.current.children[1].children[0]

    const duration = 1.6
    const ease = 'expo.out'

    tl.from(textTop, {
      duration,
      y: '150%',
      ease,
    }).from(
      textBottom,
      {
        duration,
        y: '150%',
        ease,
      },
      `-=${duration}`
    )
  }, [])

  return (
    <StyledJobTitle ref={jobTitle}>
      <div className="line">
        <div className="text">FRONTEND</div>
      </div>
      <div className="line">
        <div className="text">DEVELOPER</div>
      </div>
    </StyledJobTitle>
  )
}

const StyledJobTitle = styled.h1`
  margin-right: -5px;
  margin-bottom: -14px;
  margin-left: auto;

  .line {
    overflow: hidden;

    .text {
      font-size: 7.813vw;
      line-height: 1;
    }
  }

  @media (max-width: ${theme.breakpoint.tablet}) {
    margin-right: -3px;
    margin-bottom: -8px;
    place-self: end;

    .line {
      .text {
        font-size: 9.115vw;
      }
    }
  }

  @media (max-width: ${theme.breakpoint.mobileL}) {
    margin-right: -3px;
    margin-bottom: -4px;
    position: absolute;
    right: 0;
    bottom: 0;

    .line {
      .text {
        font-size: 11.765vw;
      }
    }
  }
`

export default JobTitle
