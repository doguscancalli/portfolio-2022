import React from 'react'
import styled from 'styled-components'
import theme from '../../../theme'
import { useStaticQuery, graphql } from 'gatsby'

// Components
import Project from '../Project'

const Projects = () => {
  const {
    allContentfulProject: { nodes: projects },
  } = useStaticQuery(query)

  return (
    <StyledProjects>
      {/* {projects.map((project, index) => (
        <Project key={index} project={project} index={index} />
      ))} */}

      {projects.map((project, index) => {
        return <Project key={index} project={project} index={index} />
      })}
    </StyledProjects>
  )
}

export const query = graphql`
  {
    allContentfulProject {
      nodes {
        id
        title
        url
        image {
          fluid {
            src
          }
        }
      }
    }
  }
`

const StyledProjects = styled.ul`
  margin-top: 8.333vw;

  @media (max-width: ${theme.breakpoint.mobileL}) {
    margin-top: 14.118vw;
  }
`

export default Projects
