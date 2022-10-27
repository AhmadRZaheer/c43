import React from 'react'
import classes from './SectionSix.module.css';
import Wrapper from '../Helpers/Wrapper'
import Object from '../../assets/object.png'

const SectionSix = () => {
  return (
    <Wrapper>
      <div className={classes.container}>
        <div className={classes.text}>
            <h1>HOW</h1>
            <h1>WE</h1>
            <h1>DO IT</h1>
        </div>
        <div className={classes.imgOverlay}>
            <img className={classes.imgOne} src={Object} alt="Object" />
        </div>
      </div>
    </Wrapper>
  )
}

export default SectionSix;
