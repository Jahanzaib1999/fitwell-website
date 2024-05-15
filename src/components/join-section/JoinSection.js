import React from 'react';
import './JoinSection.css'; // Import the CSS file for styling

const JoinSection = () => {
  return (
    <div className="join-section">
      <div className="join-now-card-wrapper container">
        <div className="join-now-card">
          <h2>JOIN TODAY</h2>
          <p>
            Ready to embark on a fitness journey that transforms not only your body but your entire well-being?
          </p>
          <a href="plans.html">
            <button className="cta-button">Join Today</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default JoinSection;
