import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Fine Dining" />
      <h1 className="p__cormorant" style={{fontSize: "47px"}}>-Bar Menu-</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu_menu_heading">Cocktails</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail, index) => (
            <p>{cocktail.title}</p>
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
            <img src={images.martini} alt="wine img" />
      </div>

      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu_menu_heading">Wine List</p>
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, index) => (
            <p>{wine.title}</p>
          ))}
        </div>
      </div>

    </div>
    <div style={{marginTop: "15px"}}>
        <button type="button" className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;
