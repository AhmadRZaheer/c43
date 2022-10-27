import React, { useEffect } from 'react';
import Wrapper from '../Helpers/Wrapper'
import classes from './SectionThree.module.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SectionThree = (props) => {

  const {ref, inView} = useInView({
    threshold: 0
  })

  const outerCircle = useAnimation();
  const innerCircle = useAnimation();

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
  })

  return (
    <Wrapper>
      <div ref={ref}>
        <motion.div className={classes.outercircle}>
            <motion.div className={classes.innercircle}>
                
            </motion.div>
        </motion.div>
      </div>
    </Wrapper>
  )
}

export default SectionThree
