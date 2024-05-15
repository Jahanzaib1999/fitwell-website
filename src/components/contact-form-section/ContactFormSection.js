import React from 'react';

import './ContactFormSection.css'

const ContactFormSection = () => {
  return (
    <section className="contact-form-section container">
      <div className="form-wrapper">
        <form id="email-form" name="email-form">
          <div className="form-row">
            <div className="form-cell">
              <label htmlFor="Name" className="field-label">Full name</label>
              <input className="form-field" name="Name" placeholder="Jahanzeb Khan" type="text" id="Name" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-cell">
              <label htmlFor="Email" className="field-label">Email</label>
              <input className="form-field" name="Email" placeholder="jahanzaib1999@gmail.com" type="email" id="Email" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-cell">
              <label htmlFor="Phone" className="field-label">Phone</label>
              <input className="form-field" name="Phone" placeholder="0405 XXX XXX" type="tel" id="Phone" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-cell">
              <label htmlFor="Message" className="field-label">Your message</label>
              <textarea placeholder="Put your message here" id="Message" name="Message" className="textarea-field"></textarea>
            </div>
          </div>

          <button type="submit" className="cta-button send-button">Send</button>

        </form>
      </div>
    </section>
  );
}

export default ContactFormSection;
