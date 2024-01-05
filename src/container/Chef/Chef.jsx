import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img className="bordered" src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Duba's Mission" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">We pride ourselves on treating each and everyone of our guests as our friends and family</p>
        </div>
        <br />
        <p className="p__opensans">We strive to provide a great dining experience for everyone. Group meals where we guests spend time together with family and friends is one of the most important things to make sure we do well. We want to be a valuable part of making that happen.</p>
      </div>

      <div className="app__chef-sign">
        <p>Shawn Park</p>
        <p className="p__opensans">Management & Owner</p>
      </div>
    </div>
  </div>
);

export default Chef;
