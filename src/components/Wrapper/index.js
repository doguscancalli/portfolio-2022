import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'

const Wrapper = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>
}

const StyledWrapper = styled.div`
  padding: 4.166666666666666vw;

  @media (max-width: ${theme.breakpoint.tablet}) {
    padding: 10.416666666666668vw 5.208333333333334vw;
  }

  @media (max-width: ${theme.breakpoint.mobileL}) {
    padding: 5.647058823529412vw 2.823529411764706vw;
  }
`

export default Wrapper
