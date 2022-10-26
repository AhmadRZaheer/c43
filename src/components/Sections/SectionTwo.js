import React, { useEffect } from 'react'
import classes from './SectionTwo.module.css';
import Wrapper from '../Helpers/Wrapper';
import {motion, useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SectionTwo = (props) => {
  return (
    <Wrapper>
      <div className={classes.container}>
        <motion.h1 className={classes.heading}>Trust is hard earned commodity, and
            we earns yours through results.
        </motion.h1>
        <motion.button className={classes.button} type="button">Coffee?</motion.button>
      </div>
    </Wrapper>
  )
}

export default SectionTwo;