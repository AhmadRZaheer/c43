import React from 'react'
import Wrapper from '../Helpers/Wrapper'
import Navbar from '../UI/Navbar'
import HeroSection from '../HeroSection/HeroSection'
import Section from '../Sections/Section'

const Home = (props) => {
  return (
    <Wrapper>
        <Navbar />
        <HeroSection />
        <Section />
    </Wrapper>
  )
}

export default Home
