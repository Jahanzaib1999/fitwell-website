import React from 'react';
import battleRopesImg from '../../assets/images/class-5.jpeg';
import yogaAndBalanceImg from '../../assets/images/class-yoga.jpeg';
import bodyCombatImg from '../../assets/images/class-1.jpeg';
import hiitCardioImg from '../../assets/images/class-2.jpeg';
import squatSessionsImg from '../../assets/images/class-3.jpeg';
import coreFocusImg from '../../assets/images/class-4.jpeg';
import './ClassCard.css';

const ClassCard = ({ className, classTime, classCalories }) => {
  const getImageSrc = (name) => {
    switch (name) {
      case 'BATTLE ROPES':
        return battleRopesImg;
      case 'YOGA AND BALANCE':
        return yogaAndBalanceImg;
      case 'BODY COMBAT':
        return bodyCombatImg;
      case 'HIIT Cardio Workout':
        return hiitCardioImg;
      case 'Squat Sessions':
        return squatSessionsImg;
      case 'Core Focus':
        return coreFocusImg;
      default:
        return '';
    }
  };

  const imgSrc = getImageSrc(className);

  return (
    <a href="classes" className="class-link">
      <div className="class-item">
        <img src={imgSrc} alt={className} />
        <h4 className="class-name">{className}</h4>
        <div className="class-details">
          <div className="class-time">{classTime}</div>
          <div className="class-detail-divider">&nbsp;•&nbsp;</div>
          <div className="class-calories">{classCalories}</div>
        </div>
      </div>
    </a>
  );
};

export default ClassCard;
