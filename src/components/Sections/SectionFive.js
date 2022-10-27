import React from 'react'
import classes from './SectionFive.module.css';
import Wrapper from '../Helpers/Wrapper'
import Object from '../../assets/object.png'

const SectionFive = () => {
  return (
    <Wrapper>
      <div className={classes.container}>
        <h1 className={classes.header}>Services</h1>
        <div className={classes.text}>
            <h1>WHAT</h1>
            <h1>WE</h1>
            <h1>DO</h1>
        </div>
        <div className={classes.imgOverlay}>
            <img className={classes.imgOne} src={Object} alt="Object" />
            <img className={classes.imgTwo} src={Object} alt="Object" />
        </div>
      </div>
    </Wrapper>
  )
}

export default SectionFive;
