import React from 'react';

import './ContactPage.css';
import ContactSection from '../../components/contact-section/ContactSection';
import ContactFormSection from '../../components/contact-form-section/ContactFormSection';
import SupportCardsSection from '../../components/support-card-section/SupportCardsSection';

const ContactPage = () => {
  return <>
    <ContactSection />
    <ContactFormSection/>
    <SupportCardsSection/>
  </>;
};

export default ContactPage;
