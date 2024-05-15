import React from 'react';
import './HomePage.css';
import MainHeroSection from '../../components/main-hero-section/MainHeroSection';
import ClassesSection from '../../components/classes-section/ClassesSection';
import PlansSection from '../../components/plans-section/PlansSection';
import FAQSection from '../../components/faq-section/FAQSection';
import ContactSection from '../../components/contact-section/ContactSection';
import JoinSection from '../../components/join-section/JoinSection';

const HomePage = () => {
  return (
    <>
      <MainHeroSection />
      <ClassesSection isHomePage={true}/>
      <PlansSection/>
      <FAQSection/>
      <ContactSection/>
      <JoinSection/>
    </>
  );
};

export default HomePage;
