import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Duba Karaoke Pub" />
      <h1 className="app__header-h1">The Perfect spot for your next night out!</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>DUBA is the perfect spot to grab a couple of friends for a fun night out or bring the whole house for karaoke craziness! </p>
      <button type="button" className="custom__button">
        <a href="#menu">Explore Menu</a>
      </button>
    </div>

    <div className="app__wrapper_img">
      <img className="bordered" src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
