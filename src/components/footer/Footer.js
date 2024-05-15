import React from 'react';
import { Link } from 'react-router-dom';
import FitwellLogoInverted from '../../assets/images/fitwell-logo-inverted.png';
import FbIcon from '../../assets/images/fb-icon.svg';
import XLogo from '../../assets/images/x-logo.png';
import IgLogo from '../../assets/images/ig-logo.svg';
import YtLogo from '../../assets/images/yt-logo.svg';
import GpIcon from '../../assets/images/gp-icon.svg';
import ApIcon from '../../assets/images/ap-icon.svg';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-body">
        <div className="footer-main">
          <div className="logo-and-social">
            <Link to="/">
              <img src={FitwellLogoInverted} alt="Footer Logo" className="footer-logo" />
            </Link>
            <div className="social-links">
              <a href="https://www.facebook.com" target="_blank">
                <img src={FbIcon} alt="Facebook Icon" />
              </a>
              <a href="https://www.twitter.com" target="_blank">
                <img src={XLogo} alt="X Logo" className="x-logo-svg" />
              </a>
              <a href="https://www.instagram.com" target="_blank">
                <img src={IgLogo} alt="Instagram Icon" />
              </a>
              <a href="https://www.youtube.com" target="_blank">
                <img src={YtLogo} alt="YouTube Icon" />
              </a>
            </div>
          </div>
          <div className="footer-menu">
            <div className="menu-left">
              <Link to="/" className="footer-menu-links">
                Home
              </Link>
              <Link to="/about" className="footer-menu-links">
                About
              </Link>
              <Link to="/trainers" className="footer-menu-links">
                Trainers
              </Link>
              <Link to="/contact" className="footer-menu-links">
                Contact
              </Link>
            </div>
            <div className="menu-right">
              <Link to="/plans" className="footer-menu-links">
                Plans
              </Link>
              <Link to="/classes" className="footer-menu-links">
                Classes
              </Link>
              <Link to="/" className="footer-menu-links">
                Terms & Conditions
              </Link>
              <Link to="/" className="footer-menu-links">
                Licences
              </Link>
            </div>
          </div>
          <div className="play-store-buttons">
            <a href="https://www.googleplay.com" target="_blank">
              <button className="cta-button with-icon">
                <img src={GpIcon} alt="Google Play Icon" />
                <span>Google Play</span>
              </button>
            </a>
            <a href="https://www.appleplay.com" target="_blank">
              <button className="cta-button with-icon">
                <img src={ApIcon} alt="Apple Play Icon" />
                <span>Apple Play</span>
              </button>
            </a>
          </div>
        </div>
        <div className="white-divider"></div>
        <div className="footer-banner">
          Designed and Powered by <span>FitWell</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
