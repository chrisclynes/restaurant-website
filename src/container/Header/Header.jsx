import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';


import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper header__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Find your flavor" />
      <h1 className="app__header-h1">The True Taste of Italy</h1>
      <p className="p__opensans" style={{margin: '2rem 0'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      <button type="button" className="custom__button">Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.pastabolognese} alt="header img" />
    </div>
  </div>
  
  
);

export default Header;
