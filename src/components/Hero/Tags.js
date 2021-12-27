import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

const Tags = () => {
  const tags = useRef(null)

  let tl = gsap.timeline({ delay: 1.2 })

  useEffect(() => {
    const texts = [...tags.current.childNodes].map(text => text.firstChild)

    const duration = 1.6
    const ease = 'expo.out'

    tl.from(texts, {
      duration,
      y: '100%',
      stagger: 0.1,
      ease,
    })
  }, [])

  return (
    <StyledTags>
      <div className="inner" ref={tags}>
        <div className="wrapper">
          <p>Minimal</p>
        </div>
        <div className="wrapper">
          <p className="center">Etkileşim</p>
        </div>
        <div className="wrapper">
          <p className="right">Güncel</p>
        </div>
        <div className="wrapper">
          <p>Kreatif</p>
        </div>
        <div className="wrapper">
          <p className="center">Animasyon</p>
        </div>
        <div className="wrapper">
          <p className="right">1.618</p>
        </div>
      </div>
    </StyledTags>
  )
}

const StyledTags = styled.div`
  padding-top: 0.833vw;

  .inner {
    display: grid;
    grid-template-columns: repeat(3, auto);

    .wrapper {
      overflow: hidden;

      p {
        &.center {
          text-align: center;
        }

        &.right {
          text-align: right;
        }
      }
    }
  }
`

export default Tags
