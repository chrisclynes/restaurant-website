import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'

import { images } from '../../constants';
import { FooterOverlay, Newsletter } from '../../components';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links" style={{zIndex: "1"}}>
      <div className="app__footer-links_icons">
        <FiFacebook />
        <FiTwitter />
        <FiInstagram />
      </div>
      <div className="app__footer-links_logo">
        <img src={images.flavios} alt="logo" />
      </div>
    </div>
    <div className="footer__copyright" style={{zIndex: "1"}}>
      <p className="p__opensans">2022 Flavio's. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
