import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'

// Components
import Heading from './Heading'
import Projects from './Projects'

const ProjectDisplay = () => {
  return (
    <StyledProjectDisplay data-scroll-section>
      <Heading />
      <Projects />
    </StyledProjectDisplay>
  )
}

const StyledProjectDisplay = styled.section`
  padding: 4.166666666666666vw;
  margin-top: 4.167vw;

  @media (max-width: ${theme.breakpoint.tablet}) {
    grid-template-rows: 1fr 1fr;
    padding: 10.416666666666668vw 5.208333333333334vw;
    margin-top: 10.417vw;
  }

  @media (max-width: ${theme.breakpoint.mobileL}) {
    padding: 5.647058823529412vw 2.823529411764706vw;
    margin-top: 8.276vw;
  }
`

export default ProjectDisplay
