import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'
import { use100vh } from 'react-div-100vh'

// Components
import Name from './Name'
import JobTitle from './JobTitle'
import Tags from './Tags'
import Arrow from './Arrow'

const Hero = () => {
  const height = use100vh()

  return (
    <StyledHero height={height} data-scroll-section>
      <Name />
      <div className="content">
        <Tags />
        <JobTitle />
        <Arrow />
      </div>
    </StyledHero>
  )
}

const StyledHero = styled.section`
  display: grid;
  grid-template-rows: 1fr auto;
  height: ${props => props.height}px;
  padding: 4.166666666666666vw;

  @media (max-width: ${theme.breakpoint.tablet}) {
    grid-template-rows: 1fr 1fr;
    padding: 10.416666666666668vw 5.208333333333334vw;
  }

  @media (max-width: ${theme.breakpoint.mobileL}) {
    padding: 5.647058823529412vw 2.823529411764706vw;
  }

  .content {
    position: relative;
    display: flex;
    justify-content: space-between;
  }
`

export default Hero
