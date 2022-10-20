import React, { useEffect } from 'react';
import Wrapper from '../Helpers/Wrapper';
import classes from './SectionOne.module.css'
import Object from '../../assets/object.png'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SectionOne = (props) => {

  const {ref, inView} = useInView({
    threshold: 0.4
  });
  const textanimation = useAnimation()
  const imganimation = useAnimation()


  useEffect(() => {
    if(!inView) {
      textanimation.start({
        x:0, opacity: 0 
      })
    }
    if (inView) {
      textanimation.start({
        x: -300,
        opacity:1,
        transition:{
          type: 'spring',
          bounce: 0.3,
          delay: 1.25
        }
      })
    }
    if(!inView) {
      imganimation.start({
        x:0,
        transition:{
          type: 'spring',
          stiffness:50
        }
      })
    }
    if(inView){
      imganimation.start({
        x:1000,
        transition:{
          type: 'tween',
          delay: 1
        }
      })
    }
  }, [inView]);

  return (
    <Wrapper>
      <div className={classes.container}>
        <div ref={ref} className={classes.box}>
          <motion.h1  
            animate={textanimation} 
            className={classes.text}>
            Our Partners Choose us for their Growth Journey
            because we are willing to go hunting with them.</motion.h1>

          <motion.img 
            animate={imganimation} 
            src={Object} alt="Object" 
            className={classes.img} />

        </div>
      </div>
    </Wrapper>
  )
}

export default SectionOne