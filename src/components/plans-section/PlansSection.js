import React from 'react';
import bulletIcon from '../../assets/images/list-bullet.svg';

import './PlansSection.css'
import { plansData } from '../../constants/constants';
import PlanCard from '../plan-card/PlanCard';

const PlansSection = ({withoutHeader=false}) => {
  return (
    <section className="plans-section container">
    {!withoutHeader && <>
      <h2>Our Plans</h2>
      <p>There are plenty of options to choose from. Choose a plan that's right for you.</p>
    </>}
      <div className="plan-cards-wrapper">

        <div className="plan-cards-wrapper">
        {plansData.map((plan, index) => (
          <PlanCard key={index} {...plan} />
        ))}
      </div>

        

      </div>

    </section>
  );
}

export default PlansSection;
