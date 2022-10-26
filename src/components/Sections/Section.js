import React from 'react'
import Wrapper from '../Helpers/Wrapper'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'

const Section = (props) => {
  return (
    <Wrapper>
        <SectionOne />
        <SectionTwo />
        <SectionThree/>
    </Wrapper>
  )
}

export default Section
