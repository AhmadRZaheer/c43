import React from 'react';
import classes from './Navbar.module.css';
import Wrapper from '../Helpers/Wrapper';
import MENUICON from "../../assets/menuicon.png";
import logo from "../../assets/Group 3.png";
import MENU from "../../assets/menu.png";

const Navbar = (props) => {
  return (
    <Wrapper>
        <div className={classes.navbar}>
            <img className={classes.hoverbefore} src={MENUICON} alt="before" />
            <img className={classes.afterhover} src={MENU} alt="after" />
            <img className={classes.logo} src={logo} alt="Logo" />
        </div>
    </Wrapper>
  )
}

export default Navbar;
