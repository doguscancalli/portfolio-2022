import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import theme from '../../theme'
import useOnScreen from '../../hooks/useOnScreen'
import gsap from 'gsap'

// Data
import { social } from '../../data/links'

const Footer = () => {
  const mailRef = useRef(null)

  const [reveal, setReveal] = useState(false)

  const onScreen = useOnScreen(mailRef)

  useEffect(() => {
    if (onScreen) setReveal(onScreen)
  }, [onScreen])

  let tl = gsap.timeline()

  useEffect(() => {
    if (!reveal) return

    const mail = mailRef.current.children[0].children[0]

    const duration = 2.4
    const ease = 'expo.out'

    tl.to(mail, {
      duration,
      y: 0,
      ease,
    })
  }, [reveal])

  return (
    <StyledFooter data-scroll-section>
      <a className="mail" href="mailto:hey@dogus.design" ref={mailRef}>
        <div className="line">
          <div className="text">hey@dogus.design</div>
        </div>
      </a>
      <div className="bottom">
        <p className="copyright">&copy; {new Date().getFullYear()}</p>

        <ul className="social">
          {social.map(item => (
            <li key={item.platform}>
              <a href={item.to} target="_blank" rel="noreferrer">
                {item.platform}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  padding: 4.166666666666666vw;
  margin-top: 12.5vw;

  @media (max-width: ${theme.breakpoint.tablet}) {
    grid-template-rows: 1fr 1fr;
    padding: 10.416666666666668vw 5.208333333333334vw;
    margin-top: 39.0625vw;
  }

  @media (max-width: ${theme.breakpoint.mobileL}) {
    padding: 5.647058823529412vw 2.823529411764706vw;
    margin-top: 70.58823529411765vw;
  }

  .mail {
    width: 100%;
    .line {
      overflow: hidden;
      padding: 0.7rem 0;

      .text {
        font-size: 7.813vw;
        text-align: center;
        transform: translateY(150%);
      }
    }

    @media (max-width: ${theme.breakpoint.mobileL}) {
      .line {
        padding: 0.4rem 0;

        .text {
          font-size: 8.471vw;
        }
      }
    }
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 6.25rem;

    .copyright {
      opacity: 1;
    }

    .social {
      display: flex;

      li {
        margin-right: 1.5rem;

        &:last-child {
          margin-right: 0;
        }
      }
    }

    @media (max-width: ${theme.breakpoint.tablet}) {
      margin-top: 3.75rem;
    }

    @media (max-width: ${theme.breakpoint.mobileL}) {
      margin-top: 1.875rem;
      font-size: 0.75rem;

      .social {
        li {
          margin-right: 0.5rem;
        }
      }
    }
  }
`

export default Footer
