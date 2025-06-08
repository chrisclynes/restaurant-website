import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscChromeClose } from 'react-icons/vsc';


import images from '../../constants/images';
import './Navbar.css';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
  <nav className="app__navbar">
    <div className="app__navbar-logo">
      <img src={images.flavios} alt="restuarant logo" />
    </div>
    <div className="nav_items-container">
      <div className="nav_items">
        <ul className="app__navbar-links">
          <li className="nav_item p__opensans"><a href="#home">Home</a></li>
          <li className="nav_item p__opensans"><a href="#about">About</a></li>
          <li className="nav_item p__opensans"><a href="#menu">Menu</a></li>
          <li className="nav_item p__opensans"><a href="#awards">Awards</a></li>
          <li className="nav_item p__opensans"><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="nav_items-right">
        <ul className="app__navbar-loginbook">
          <li className="nav_item p__opensans"><a href="#contact">Book Table</a></li>
          <li className="nav_item p__opensans"><a href="#login">Sign In</a></li>
        </ul>
      </div>
    </div>
        {!toggleMenu && (
        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu size={21} color="#fff" onClick={() => setToggleMenu(true)}/>
        </div>
        )}
        {toggleMenu && (
        <div className="app__navbar-smallscreen-container">
            <div className="app__navbar-smscreen_overlay flex__center slide-left">
            <button type="button" className="crossBtn p__opensans" onClick={() => setToggleMenu(false)} >
              <VscChromeClose size={21} color="#fff" />
            </button>
              <div className="app__navbar-smallscreen-links-container">
                <ul className="app__navbar-smallscreen-links">
                  <li className="sidebar_item p__opensans"><a href="#home">Home</a></li>
                  <li className="sidebar_item p__opensans"><a href="#about">About</a></li>
                  <li className="sidebar_item p__opensans"><a href="#menu">Menu</a></li>
                  <li className="sidebar_item p__opensans"><a href="#awards">Awards</a></li>
                  <li className="sidebar_item p__opensans"><a href="#contact">Contact</a></li>
                  <li className="sidebar_item p__opensans"><a href="/">Book Table</a></li>
                  <li className="sidebar_item p__opensans"><a href="#login">Sign In</a></li>
                </ul>
              </div>
            </div>
          </div>
         )}
  </nav>
  )};

export default Navbar;
