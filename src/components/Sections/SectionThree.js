import React, { useEffect } from 'react';
import Wrapper from '../Helpers/Wrapper'
import classes from './SectionThree.module.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SectionThree = (props) => {
  return (
    <Wrapper>
        <div className={classes.outercircle}>
            <div className={classes.innercircle}>
                
            </div>
        </div>
    </Wrapper>
  )
}

export default SectionThree
