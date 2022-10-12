import React from 'react';
import Wrapper from '../Helpers/Wrapper';
import classes from './Animation.module.css';
import Object from '../../assets/object.png';
import C from '../../assets/c.png';
import { motion } from 'framer-motion';


const Animation = (props) => {
  return (
    <Wrapper>
        <div className={classes.bg_overlay}>
                <motion.img
                    initial={{opacity: 0}} 
                    transition={{ type: 'spring', stiffness: 10,delay: 1}} 
                    animate={{x: 300, y: -150, scale: 0.15, opacity: 1}} 
                    className={classes.imgobj} 
                    src={Object} alt="Object" />
                
                <motion.img
                    initial={{opacity: 0}}
                    transition={{ type: 'spring', stiffness: 10,delay: 1}} 
                    animate={{x: 400, y: 200, scale: 0.3, opacity: 1}} 
                    className={classes.imgobj} 
                    src={Object} alt="Object" />
                
                <motion.img 
                    transition={{ type: 'spring', stiffness: 10,delay: 1}} 
                    animate={{x: -450, y: -120, scale: 0.4}} 
                    className={classes.imgobj} 
                    src={Object} alt="Object" />

                <motion.img 
                    src={C} 
                    alt="C" 
                    className={classes.c}
                    initial={{opacity: 0}}
                    transition={{delay:2.8, ease: 'easeIn'}}
                    animate={{opacity:1}}  />
        </div>
    </Wrapper>
  )
}

export default Animation
