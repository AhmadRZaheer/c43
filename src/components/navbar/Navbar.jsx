import React, { useState } from "react";
import MENUICON from "../../assets/menuicon.png";
import logo from "../../assets/Group 3.png";
import MENU from "../../assets/menu.svg";
import "./navbar.scss";



const Navbar = () => {
  return (
    <div>
         <div>
            <img className="before-hover" src={MENUICON} alt="" />
            <img className="after-hover" src= {MENU} alt="" />
         </div>
      <img className="logo" src={logo} />
    </div>
  );
};

export default Navbar;
