import React from 'react'
import styled from 'styled-components'
import theme from '../../../theme'

const Title = ({ title, url, index }) => {
  return (
    <StyledTitle>
      <p className="index">/000{index + 1}</p>
      <div className="title-wrapper">
        <a className="title" href={url} target="_blank" rel="noreferrer">
          {title}
        </a>
        <a className="title clone" href={url} target="_blank" rel="noreferrer">
          {title}
        </a>
      </div>
    </StyledTitle>
  )
}

const StyledTitle = styled.div`
  .title-wrapper {
    position: relative;
    margin-left: 5rem;
    margin-top: -2rem;

    .title {
      font-size: 7.813vw;
      opacity: 0.6;
      padding: 1rem 0;

      &.clone {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 1;
        pointer-events: none;
        clip-path: inset(0 100% 0 0);
        transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
      }
    }
  }

  @media (max-width: ${theme.breakpoint.mobileL}) {
    p {
      font-size: 0.75rem;
    }

    .title-wrapper {
      margin-left: 50px;
      margin-top: -1rem;

      .title {
        padding: 0.5rem 0;
        font-size: 7.059vw;
      }
    }
  }
`

export default Title
