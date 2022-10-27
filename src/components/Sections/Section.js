import React from 'react'
import Wrapper from '../Helpers/Wrapper'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'

const Section = (props) => {
  return (
    <Wrapper>
        <SectionOne />
        <SectionTwo />
        <SectionThree/>
        <SectionFour />
    </Wrapper>
  )
}

export default Section
