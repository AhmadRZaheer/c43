import React, { useEffect } from 'react'
import classes from './SectionFour.module.css';
import Wrapper from '../Helpers/Wrapper';
import Object from '../../assets/object.png';
import C from '../../assets/image 2.png';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SectionFour = () => {

    const {ref, inView} = useInView({
        threshold: 0.8
    })

    const txtAnimation = useAnimation();
    const cImageAnimation = useAnimation();
    const imgAnimation = useAnimation();
    const imgOneAnimation = useAnimation();
    const imgTwoAnimation = useAnimation();

    useEffect(() => {
        if (!inView) {
            txtAnimation.start({
                y: 100,
                opacity: 0,
                transition: {
                    type: 'spring',
                    bounce: 0,
                }
            })
            
            cImageAnimation.start({
                scale: 0.8,
                opacity: 0,
                transition: {
                    type: 'spring',
                    bounce: 0
                }
            })

            imgAnimation.start({
                x: -100,
                y: 200,
                opacity: 0,
                transition: {
                    type: 'spring',
                    bounce: 0
                }
            })

            imgOneAnimation.start({
                x: '-100vw',
                opacity: 0,
                transition: {
                    type: 'spring',
                    bounce: 0
                }
            })

            imgTwoAnimation.start({
                x: 0,
                opacity: 0,
                transition: {
                    type: 'spring',
                    bounce: 0
                }
            })

        }
        if (inView) {
            txtAnimation.start({
                y: 0,
                opacity: 1,
                transition: {
                    type: 'spring',
                    bounce: 0
                }
            })

            cImageAnimation.start({
                scale: 0.9,
                opacity: 1,
                transition: {
                    type: 'spring',
                    bounce: 0
                }
            })

            imgAnimation.start({
                x: -100,
                y: 0,
                opacity: 1,
                transition: {
                    type: 'spring',
                    bounce: 0
                }
            })

            imgOneAnimation.start({
                x: 50,
                opacity: 1,
                transition: {
                    type: 'spring',
                    bounce: 0,
                }
            })

            imgTwoAnimation.start({
                x: -100,
                opacity: 1,
                transition: {
                    type: 'spring',
                    bounce: 0
                }
            })
        }
    })

  return (
    <Wrapper>
        <div ref={ref}>
        <div className={classes.container}>
            <div className={classes.overlay}>
                <motion.img src={C} animate={cImageAnimation} className={classes.C} alt="C" />
                <motion.img src={Object} animate={imgAnimation} className={classes.img} alt="Object" />
                <motion.img src={Object} animate={imgOneAnimation} className={classes.img1} alt="Object" />
                <motion.img src={Object} animate={imgTwoAnimation} className={classes.img2} alt="Object" />
            </div>
            <motion.h1 animate={txtAnimation} className={classes.heading}>
                You wouldn't just stick to our Digital Services. Our clients
                trust us enough to leverage our partner-network to help scale
                their growing businesses.
            </motion.h1>
        </div>
        </div>
    </Wrapper>
  )
}

export default SectionFour
