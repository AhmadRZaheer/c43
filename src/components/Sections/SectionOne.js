import React, { useEffect } from 'react';
import Wrapper from '../Helpers/Wrapper';
import classes from './SectionOne.module.css'
import Object from '../../assets/object.png'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

const SectionOne = (props) => {

  const {ref, inView} = useInView();
  const animation = useAnimation()

  useEffect(() => {
    console.log('Use effect hook, inView=', inView)
  }, [inView]);

  return (
    <Wrapper>
      <div className={classes.container}>
        <div ref={ref} className={classes.box}>
          <motion.h1 animate={{x: -200}} className={classes.text}>
            Our Partners Choose us for their Growth Journey
            because we are willing to go hunting with them.</motion.h1>

          <motion.img animate={{x: 1000}} src={Object} alt="Object" className={classes.img} />

        </div>
      </div>
    </Wrapper>
  )
}

export default SectionOne