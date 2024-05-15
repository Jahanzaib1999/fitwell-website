import React from 'react';
import './MainHeroSection.css';

import mfLogo from '../../assets/images/mf-logo.png';
import wgLogo from '../../assets/images/WG-logo.png';
import faLogo from '../../assets/images/FA-logo.png';
import ufcLogo from '../../assets/images/UFC-logo.png';
import afLogo from '../../assets/images/af-logo.png';

const MainHeroSection = () => {
  return (
    <div className="main-hero-section">
      <p className="large-text container">
        HARDER <br /> BETTER <br />
        FASTER <br />
        STRONGER
        <br />
      </p>

      <div className="hero-section-content">
        <button className="cta-button">Get Started</button>
        <button className="text-button">Learn More</button>

        <div className="partners-div">
          <span className="white-trust-text">Trusted by the best</span>
          <div className="partners-logo-wrapper">
            <img src={mfLogo} alt="MF Logo" />
            <img src={wgLogo} alt="WG Logo" />
            <img src={faLogo} alt="FA Logo" />
            <img src={ufcLogo} alt="UFC Logo" />
            <img src={afLogo} alt="AF Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeroSection;
