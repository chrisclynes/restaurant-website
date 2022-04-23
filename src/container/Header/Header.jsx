import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';


import './Header.css';

const Header = () => (
  
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Find your flavor" />
      <h1 className="app__header-h1">The True Taste of Italy</h1>
    </div>
    <div className="app__wrapper_img">

    </div>
  </div>
  
  
);

export default Header;
