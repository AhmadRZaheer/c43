import React, { useEffect } from 'react'
import classes from './SectionTwo.module.css';
import Wrapper from '../Helpers/Wrapper';
import {motion, useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SectionTwo = (props) => {

  const {ref, inView} = useInView({
    threshold: 0.9
  })

  const textAnimation = useAnimation();
  const btnAnimation = useAnimation();

  useEffect(() => {
    if (!inView) {
      textAnimation.start({
        y: -100, 
        opacity: 0,
        transition:{
          type: 'spring',
          bounce:0
        }
      })

      btnAnimation.start({
        y: 100, 
        opacity: 0,
        transition:{
          type: 'spring',
          bounce:0
        }
      })
    }

    if (inView) {
      textAnimation.start({
        y:0,
        opacity: 1,
        transition:{
          type: 'spring',
          bounce:0
        }
      })

      btnAnimation.start({
        y: 0, 
        opacity: 1,
        transition:{
          type: 'spring',
          bounce:0
        }
      })
    }
  })

  return (
    <Wrapper>
      <div ref={ref} className={classes.container}>  
        <motion.h1 
          animate={textAnimation} 
          className={classes.heading}>
          Trust is hard earned commodity, and
            we earns yours through results.
        </motion.h1>
        <motion.button whileHover={{
          backgroundColor: '#6822FF',
          border: 'none'
        }} animate={btnAnimation} className={classes.button} type="button">Coffee?</motion.button>
      </div>
    </Wrapper>
  )
}

export default SectionTwo;