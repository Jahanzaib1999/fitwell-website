import React from 'react';

import './PlanCard.css'

import ListBullet from '../../assets/images/list-bullet.svg'

const PlanCard = ({ category, price, description, features }) => {
  return (
    <div className="plan-card">
      <div className="plan-category">{category}</div>
      <div className="plan-price">
        <div className="price-number">{price}</div>
        <p>per month</p>
      </div>
      <div className="plan-overview">
        <p>{description}</p>
      </div>
      <div className="white-divider"></div>
      <div className="plan-details-list">
        {features.map((feature, index) => (
          <div key={index} className="custom-list-item">
            <img src={ListBullet} alt="bullet" />
            <p>{feature}</p>
          </div>
        ))}
      </div>
      <button className="cta-button">Choose Plan</button>
    </div>
  );
};

export default PlanCard;
