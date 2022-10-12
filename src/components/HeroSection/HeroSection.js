import React from 'react'
import Wrapper from '../Helpers/Wrapper'
import classes from './HeroSection.module.css';
import Object from '../../assets/object.png';
import C from '../../assets/c.png';
import { motion } from 'framer-motion';

const HeroSection = (props) => {
    return (
        <Wrapper>
            <div className={classes.bg_overlay}>
                <motion.img 
                    transition={{ type: 'spring', stiffness: 10,delay: 1}} 
                    animate={{x: -400, y: -120, scale: 0.3}} 
                    className={classes.imgobj} 
                    src={Object} alt="Object" />
                
                <motion.img
                    initial={{opacity: 0}} 
                    transition={{ type: 'spring', stiffness: 10,delay: 1}} 
                    animate={{x: 300, y: -150, scale: 0.2, opacity: 1}} 
                    className={classes.imgobj} 
                    src={Object} alt="Object" />
                
                <motion.img
                    initial={{opacity: 0}}
                    transition={{ type: 'spring', stiffness: 10,delay: 1}} 
                    animate={{x: 400, y: 200, scale: 0.3, opacity: 1}} 
                    className={classes.imgobj} 
                    src={Object} alt="Object" />
                
                <motion.img 
                    src={C} 
                    alt="C" 
                    className={classes.c}
                    initial={{opacity: 0}}
                    transition={{delay:2, default: { ease: "easeInOut" }}}
                    animate={{opacity:1}}  />
                
            </div>
            <div className={classes.container}>
                <div className={classes.hero_text}>
                    <p className={classes.head}>Not Just</p>
                    <h1 className={classes.head_mid}>BUZZ-WORDS</h1>
                    <p className={classes.head_btm}>Create 
                    Marketing Solutions for Disruptors.</p>
                </div>
            </div>
        </Wrapper>
    )
}

export default HeroSection;
