import React from 'react'
import Wrapper from '../Helpers/Wrapper'
import classes from './HeroSection.module.css';
import Object from '../../assets/object.png'
import { motion } from 'framer-motion';

const HeroSection = (props) => {
    return (
        <Wrapper>
            <div className={classes.bg_overlay}>
                <motion.img 
                    transition={{ type: 'spring', stiffness: 10,delay: 1}} 
                    animate={{x: -200, y: -50, scale: 0.8}} 
                    className={classes.imgobj} 
                    src={Object} alt="Object" />
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
