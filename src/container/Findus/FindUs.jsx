import React from 'react';

import { FaPhoneAlt } from 'react-icons/fa';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{marginBottom: '1.5rem'}}>Visit Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">645 Lorem ipsum St. Consequat, SW3752</p>
        <br/>
        <p className="p__opensans" style={{margin: '1rem 0 0 0'}}><FaPhoneAlt color="#fff" style={{margin: '0 1rem 0 0'}} />1 321-1234-5555</p>
        <p className="p__cormorant" style={{color: '#DCCA87', margin: '2rem 0'}}>Hours</p>
        <p className="p__opensans" style={{margin: ' 0 2rem'}}>Mon - Fri: 11am - 11pm</p>
        <br/>
        <p className="p__opensans" style={{margin: '1rem 0 0 2rem'}}>Sat: 11am - 1am</p>
        <br/>
        <p className="p__opensans" style={{margin: '1rem 2rem'}}>Sun: 12pm - 10pm</p>
      </div>
      <button className="custom__button" style={{margin: '2rem'}}>Contact Us</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="find us" />
    </div>
  </div>
);

export default FindUs;
