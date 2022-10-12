import React from 'react'
import Wrapper from '../Helpers/Wrapper'
import classes from './HeroSection.module.css';
import Animation from './Animation';
import Arrow from '../../assets/arrow.png';
import {motion} from 'framer-motion'

const HeroSection = (props) => {
    return (
        <Wrapper>
            <Animation />
            <div className={classes.container}>
                <div className={classes.hero_text}>
                    <p className={classes.head}>Not Just</p>
                    <h1 className={classes.head_mid}>BUZZ-WORDS</h1>
                    <p className={classes.head_btm}>Create 
                    Marketing Solutions for Disruptors.</p>
                </div>
            </div>
            <motion.img 
                className={classes.arrow} 
                src={Arrow} alt="Arrow"
                transition={{delay: 3, type: 'spring'}} 
                initial={{y: -60, opacity: 0}} 
                animate={{y: 0, opacity: 1}} />
        </Wrapper>
    )
}

export default HeroSection;
