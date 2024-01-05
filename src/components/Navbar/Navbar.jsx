import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAddressCard, faBeerMugEmpty, faStar, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.dubalogo} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="button p__opensans"><FontAwesomeIcon icon={faHome} /><a href="#home">Home</a></li>
        <li className="button p__opensans"><FontAwesomeIcon icon={faAddressCard} /><a href="#about">About</a></li>
        <li className="button p__opensans"><FontAwesomeIcon icon={faBeerMugEmpty} /><a href="#menu">Menu</a></li>
        <li className="button p__opensans"><FontAwesomeIcon icon={faStar} /><a href="#awards">Awards</a></li>
        <li className="button p__opensans"><FontAwesomeIcon icon={faPhoneVolume} /><a href="#contact">Contact</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Log In / Register</a>
        <div />
        <a href="/" className="p__opensans">Reserve</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
