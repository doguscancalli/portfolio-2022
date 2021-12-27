import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import GlobalStyle from '../../theme/globalStyle'
import gsap from 'gsap'

const Layout = ({ children }) => {
  useEffect(() => {
    // Fix flashing
    gsap.to('body', { visibility: 'visible' })
  }, [])

  return (
    <>
      <GlobalStyle />
      {children}
    </>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
