import React from 'react';

import './PlansPage.css';
import PlansSection from '../../components/plans-section/PlansSection';
import FAQSection from '../../components/faq-section/FAQSection';

const PlansPage = () => {
  return <section className="plans-section-detailed container">
        <h2>Check out our plans</h2>
        <p className="plans-subtitle">Choose a Plan That Fits Your Fitness Journey</p>
        <p className="plans-para">At FitWell, we believe in providing flexible options to cater to your unique fitness
            goals. Explore our
            subscription
            plans, personalized training sessions, and pre-designed workout plans to kickstart your fitness journey.
            Whether you're
            a beginner or an experienced fitness enthusiast, our diverse range of plans ensures that you find the
            perfect fit.
            Commit to a healthier lifestyle with FitWell – where your fitness aspirations meet personalized solutions.
        </p>
        
        <PlansSection withoutHeader={true}/>

        <div className='faq-div'>
        <FAQSection /></div>
        
        
        </section>;
};

export default PlansPage;
