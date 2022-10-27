import React from 'react'
import Wrapper from '../Helpers/Wrapper'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'
import SectionSix from './SectionSix'

const Section = (props) => {
  return (
    <Wrapper>
        <SectionOne />
        <SectionTwo />
        <SectionThree/>
        <SectionFour />
        <SectionFive />
        <SectionSix />
    </Wrapper>
  )
}

export default Section
