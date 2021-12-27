import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import theme from '../../theme'
import useOnScreen from '../../hooks/useOnScreen'
import { gsap, ScrollTrigger } from 'gsap/all'

// Data
import skills from '../../data/skills'
const Skills = () => {
  const skillsRef = useRef(null)

  const [reveal, setReveal] = useState(false)

  const onScreen = useOnScreen(skillsRef)

  useEffect(() => {
    if (onScreen) setReveal(onScreen)
  }, [onScreen])

  let tl = gsap.timeline()

  useEffect(() => {
    if (!reveal) return

    const skillsArr = [
      ...skillsRef.current.children[0].children[0].childNodes,
      ...skillsRef.current.children[0].children[1].childNodes,
    ]

    const duration = 1.8
    const ease = 'expo.out'

    tl.to(
      skillsArr.map(item => item.firstChild),
      {
        duration,
        y: 0,
        ease,
        stagger: 0.1,
      }
    )
  }, [reveal])

  return (
    <StyledSkills ref={skillsRef}>
      <div className="skills-inner">
        <ul>
          {skills[0].map(skill => (
            <li className="skill" key={skill}>
              <p>{skill}</p>
            </li>
          ))}
        </ul>
        <ul>
          {skills[1].map(skill => (
            <li className="skill" key={skill}>
              <p>{skill}</p>
            </li>
          ))}
        </ul>
      </div>
    </StyledSkills>
  )
}

const StyledSkills = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 4.167vw;

  .skills-inner {
    display: flex;
    gap: 3.125vw;
    grid-area: 1 / 4 / 2 / 5;

    .skill {
      overflow: hidden;

      p {
        transform: translateY(100%);
      }
    }
  }

  @media (max-width: ${theme.breakpoint.mobileL}) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 14.118vw;

    .skills-inner {
      margin-left: auto;
      gap: 7.059vw;
      grid-area: 1 / 2 / 2 / 3;
    }
  }
`

export default Skills
