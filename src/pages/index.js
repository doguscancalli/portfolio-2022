import React from 'react'

// Components
import Seo from '../components/Seo'
import Hero from '../components/Hero'
import ProjectDisplay from '../components/ProjectDisplay'
import MySkills from '../components/MySkills'
import Footer from '../components/Footer'

// Hooks
import useLocoScroll from '../hooks/useLocoScroll'

const IndexPage = () => {
  useLocoScroll(true)

  return (
    <>
      <Seo title="Home" />
      <main
        className="main-container"
        id="main-container"
        data-scroll-container
      >
        <Hero />
        <ProjectDisplay />
        <MySkills />
        <Footer />
      </main>
    </>
  )
}

export default IndexPage
