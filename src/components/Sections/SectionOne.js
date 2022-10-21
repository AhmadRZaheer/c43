import React, { useEffect } from 'react';
import Wrapper from '../Helpers/Wrapper';
import classes from './SectionOne.module.css';
import Object from '../../assets/object.png';
import Arrows from '../../assets/arrows.png'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SectionOne = (props) => {

  const {ref, inView} = useInView({
    threshold: 0.6
  });
  const textAnimation = useAnimation();
  const imgAnimation = useAnimation();
  const sndImgAnimation = useAnimation();
  const arrows = useAnimation();


  useEffect(() => {
    if(!inView) {
      textAnimation.start({
        x:0, opacity: 0, transition:{
          type: 'spring',
          bounce: 0
        } 
      })

      imgAnimation.start({
        x:0,
        transition:{
          type: 'spring',
          bounce:0
        }
      })

      sndImgAnimation.start({
        x:'-100vw',
        transition:{
          type: 'spring',
         stiffness:50
        }
      })

      arrows.start({
        x: '-100vw',
        opacity: 0
      })

    }
    if (inView) {
      textAnimation.start({
        x: -300,
        opacity:1,
        transition:{
          type: 'spring',
          bounce: 0,
          delay: 1.25
        }
      })

      imgAnimation.start({
        x:1000,
        transition:{
          type: 'spring',
          delay: 1,
          bounce: 0
        }
      })

      sndImgAnimation.start({
        x: 0,
        transition:{
          type: 'spring',
          delay:1.75,
          bounce: 0
        }
      })

      arrows.start({
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          bounce: 0,
          delay: 1.25
        }
      })

    }

  }, [inView, textAnimation, imgAnimation, sndImgAnimation, arrows]);

  return (
    <Wrapper>
      <div className={classes.container}>
        <div ref={ref} className={classes.box}>
          <motion.h1  
            animate={textAnimation} 
            className={classes.text}>
            Our Partners Choose us for their Growth Journey
            because we are willing to go hunting with them.</motion.h1>

          <motion.img 
            animate={imgAnimation} 
            src={Object} alt="Object" 
            className={classes.img} />
          
          <motion.img animate={sndImgAnimation} className={classes.img_second} src={Object} alt="Object" />
          <motion.img animate={arrows} className={classes.arrows} src={Arrows} alt='Arrows'/>
        </div>
      </div>
    </Wrapper>
  )
}

export default SectionOne