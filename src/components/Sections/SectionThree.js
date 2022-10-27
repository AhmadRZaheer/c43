import React, { useEffect } from 'react';
import Wrapper from '../Helpers/Wrapper'
import classes from './SectionThree.module.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SectionThree = (props) => {

  const {ref, inView} = useInView({
    threshold: 0.3
  })

  const outerCircle = useAnimation();

  useEffect(() => {
    if (!inView) {
      outerCircle.start({
        opacity: 0,
        transition: {
          type: 'spring',
          bounce: 0
        }
        
      })
    }

    if (inView) {
      outerCircle.start({
        opacity: 1,
        transition: {
          type: 'spring',
          bounce: 0
        }
      })
    }

  })

  return (
    <Wrapper>
      <div ref={ref}>
        <motion.div animate={outerCircle} className={classes.outercircle}>
          <h1>Have nothing to put here atm.</h1>
        </motion.div>
      </div>
    </Wrapper>
  )
}

export default SectionThree
