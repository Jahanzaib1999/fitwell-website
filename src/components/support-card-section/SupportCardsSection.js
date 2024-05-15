import React from 'react';

import SupportImg from '../../assets/images/support-icon.svg'
import EnterpriseImg from '../../assets/images/enterprise-icon.svg'

import './SupportCardsSection.css'

const SupportCardsSection = () => {
  return (
    <section className="support-cards-section">
      <div className="cards-wrapper">
        <div className="dark-grey-card">
          <div className="vertical-container">
            <img src={SupportImg} loading="lazy" alt="" className="icon-small" />
            <h2>Need support ?</h2>
            <a href="mailto:jahanzaib1999@gmail.com?subject=Support" className="link-colored">jahanzaib1999@gmail.com</a>
            <br />
            <a href="tel:(123)123-123" className="link-colored">(0414) XXX - XXX</a>
          </div>
        </div>
        <div className="dark-grey-card">
          <div className="vertical-container">
            <img src={EnterpriseImg} loading="lazy" alt="" className="icon-small" />
            <h2>Enterprise sales</h2>
            <a href="mailto:jahanzaib1999@gmail.com?subject=Support" className="link-colored">jahanzaib1999@gmail.com</a>
            <br />
            <a href="tel:(123)123-123" className="link-colored">(0405) XXX - XXX</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupportCardsSection;
