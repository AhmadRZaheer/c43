import React from 'react'
import Wrapper from '../Helpers/Wrapper'
import Navbar from '../UI/Navbar'
import HeroSection from '../HeroSection/HeroSection'

const Home = (props) => {
  return (
    <Wrapper>
        <Navbar />
        <HeroSection />
    </Wrapper>
  )
}

export default Home
