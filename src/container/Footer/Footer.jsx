import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
// import { Link } from 'react-router-dom';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">
          1333 W. Cheltenham Ave, FL Basement, Elkins Park, PA 19027
        </p>
        <p className="p__opensans">+1 215-635-3822</p>
        <p className="p__opensans">+1 215-635-DUBA</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.dubalogo} alt="footer_logo" />
        <p className="p__opensans">
          &quot;DUBA is the perfect spot to grab a couple of friends for a fun
          night out or bring the whole house for karaoke craziness!&quot;
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <a href="https://www.facebook.com">
            <FiFacebook />
          </a>
          <a href="https://www.twitter.com">
            <FiTwitter />
          </a>
          <a href="https://www.instagram.com/dubakaraokepub/">
            <FiInstagram />
          </a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Friday-Saturday</p>
        <p className="p__opensans">05:00pm - 02:00am</p>
        <p className="p__opensans">Sunday-Thursday:</p>
        <p className="p__opensans">05:00pm - 01:00am</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 DubaKaraoke. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
