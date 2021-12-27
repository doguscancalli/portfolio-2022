import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import theme from '../../theme'
import gsap from 'gsap'

// Assets
import ArrowBottomLarge from '../../assets/arrow-bottom-large.svg'
import ArrowBottomMedium from '../../assets/arrow-bottom-medium.svg'
import ArrowBottomSmall from '../../assets/arrow-bottom-small.svg'

const Arow = () => {
  const arrowRef = useRef(null)

  useEffect(() => {
    let tl = gsap.timeline({ delay: 2.4 })

    const duration = 1.6
    const ease = 'expo.out'

    tl.from(arrowRef.current, {
      duration,
      opacity: 0,
      ease,
    })
  }, [])

  return (
    <StyledArow ref={arrowRef}>
      <img className="arrow large" src={ArrowBottomLarge} alt="Aşağı Ok" />
      <img className="arrow medium" src={ArrowBottomMedium} alt="Aşağı Ok" />
      <img className="arrow small" src={ArrowBottomSmall} alt="Aşağı Ok" />
    </StyledArow>
  )
}

const StyledArow = styled.div`
  .arrow {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;

    &.large {
      display: unset;
    }
  }

  @media (max-width: ${theme.breakpoint.tablet}) {
    .arrow {
      &.large {
        display: none;
      }

      &.medium {
        display: unset;
      }
    }
  }

  @media (max-width: ${theme.breakpoint.mobileL}) {
    .arrow {
      &.medium {
        display: none;
      }

      &.small {
        display: unset;
      }
    }
  }
`

export default Arow
