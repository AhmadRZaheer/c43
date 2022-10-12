import React from 'react'
import Wrapper from '../Helpers/Wrapper'
import classes from './HeroSection.module.css';
import Animation from './Animation';

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
        </Wrapper>
    )
}

export default HeroSection;
