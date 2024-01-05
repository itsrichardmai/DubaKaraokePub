import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Must Try Exclusive" />
      <h1 className="headtext__cormorant">Special Drinks</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_whiskeys  flex__center">
        <p className="app__specialMenu-menu_heading">Premium Whiskey</p>
        <div className="app__specialMenu_menu_items">
          {data.whiskeys.map((whiskey, index) => (
            <MenuItem key={whiskey.title + index} title={whiskey.title} price={whiskey.price} tags={whiskey.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">
        <a href="https://dubakaraokepub.com/#menu">View More</a>
      </button>

    </div>
  </div>
);

export default SpecialMenu;
