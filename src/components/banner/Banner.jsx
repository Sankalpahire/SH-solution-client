import React from 'react';
import Video from '../../assets/banner.mp4';
import './Banner.css'; 

const Banner = () => {
  return (
    <div className="hero-section">
      <video className="hero-video" autoPlay loop muted>
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <div className="container">
        <div className="row justify-content-center align-items-center text-center">
          <div className="col">
            <h1 className="display-4">Your Headline Here</h1>
            <p className="lead">Your subheadline here</p>
            <a href="#section" className="btn btn-primary btn-lg">Get Started</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;


