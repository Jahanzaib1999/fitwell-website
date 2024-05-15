import React from 'react';
import chatIcon from '../../assets/images/chat-icon.svg';
import phoneIcon from '../../assets/images/phone-icon.svg';
import emailIcon from '../../assets/images/email-icon.svg';

import './ContactSection.css'; // Import the CSS file for styling

const ContactSection = () => {
  return (
    <section className="contact-section container">
      <div className="contact-wrapper">
        <div className="contact-left">
          <h2>We’re here for <br />you 24/7</h2>
        </div>
        <div className="contact-right">
          <div className="horizontal-container">
            <img src={chatIcon} alt="Chat Icon" />
            <p>Live Chat</p>
            <a href="contact.html" className="contact-link">
              <div className="link-and-arrow">
                <span>Chat with us</span>
                <div className="arrow-div">
                  <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="8.74228e-08" y1="7" x2="18" y2="7" stroke="currentColor" strokeWidth="2"></line>
                    <path d="M12.3535 1L18.3535 7L12.3535 13" stroke="currentColor" strokeWidth="2"></path>
                  </svg>
                </div>
              </div>
            </a>
          </div>

          <div className="horizontal-container">
            <img src={phoneIcon} alt="Phone Icon" />
            <p>Call us</p>
            <a href="contact.html" className="contact-link">
              <div className="link-and-arrow">
                <span>0405 XXX XXX</span>
                <div className="arrow-div">
                  <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="8.74228e-08" y1="7" x2="18" y2="7" stroke="currentColor" strokeWidth="2"></line>
                    <path d="M12.3535 1L18.3535 7L12.3535 13" stroke="currentColor" strokeWidth="2"></path>
                  </svg>
                </div>
              </div>
            </a>
          </div>

          <div className="horizontal-container">
            <img src={emailIcon} alt="Email Icon" />
            <p>Email us</p>
            <a href="contact.html" className="contact-link">
              <div className="link-and-arrow">
                <span>jahanzaib1999@gmail.com</span>
                <div className="arrow-div">
                  <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="8.74228e-08" y1="7" x2="18" y2="7" stroke="currentColor" strokeWidth="2"></line>
                    <path d="M12.3535 1L18.3535 7L12.3535 13" stroke="currentColor" strokeWidth="2"></path>
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
