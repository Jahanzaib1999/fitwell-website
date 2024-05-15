import React from 'react';

import './TrainersPage.css';
import { trainersData } from '../../constants/constants';
import TrainerCard from '../../components/trainer-card/TrainerCard';

const TrainersPage = () => {
  return (
    <div className="trainers-page">
      <h2 className="trainers-title">Meet our trainers</h2>
      <p className="trainers-subtitle">Meet Our Expert Trainers - Guiding You Towards a Healthier You</p>
      <p className="trainers-msg">Discover skilled and certified trainers who are dedicated to helping you achieve your fitness goals</p>

      <div className="trainers-cards-wrapper">
        {trainersData.map((trainer, index) => (
          <TrainerCard key={index} trainer={trainer} withBg={index % 2 !== 0} />
        ))}
      </div>
    </div>
  );
};

export default TrainersPage;
