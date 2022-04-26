import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="chef" />
      </div>
      <div className="app__wrapper_info">
        <SubHeading title="From the Chef" />
        <h1 className="headtext__cormorant">Our Take on Food</h1>
        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <p className="p__opensans">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
          </div>
          <br/>
          <p className="p__opensans">Vitae ultricies leo integer malesuada nunc vel risus commodo. Vitae proin sagittis nisl rhoncus mattis. Nisl purus in mollis nunc. Suspendisse sed nisi lacus sed viverra tellus in.</p>
          
      </div>
        <div className="app__chef-sign">
          <p className="p__cormorant">-Flavio Chiellini-</p>
          <p className="p__opensans" style={{ color: "rgba(172, 172, 172, 0.925)"}}>Chef and Founder</p>
          <div className="app__knife_img">
            <img src={images.knife} alt="knife" />
          </div>
        </div>
      </div>
  </div>
);

export default Chef;
