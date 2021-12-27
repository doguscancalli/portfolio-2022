import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'

// Components
import Heading from './Heading'
import Skills from './Skills'

const MySkills = () => {
  return (
    <StyledMySkills data-scroll-section>
      <Heading />
      <Skills />
    </StyledMySkills>
  )
}

const StyledMySkills = styled.section`
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
`

export default MySkills
