import React from 'react';

import './TrainerCard.css'

import ArnoldImg from '../../assets/images/arnold-img.jpg'
import UrbanImg from '../../assets/images/urban-img.jpeg'
import TateImg from '../../assets/images/andrew-img.png'
import UsainImg from '../../assets/images/usain-img.jpg'
import QuoteImg from '../../assets/images/quote-icon.svg'

const TrainerCard = ({ trainer, withBg=false }) => {

const getImageSrc = (name) => {
     switch (name) {
      case 'Arnold Schwarzenegger':
        return ArnoldImg;
        case 'Urban Osinski':
        return UrbanImg;
        case 'Andrew Tate':
        return TateImg;
        case 'Usain Bolt':
        return UsainImg;
}}

const imgSrc = getImageSrc(trainer.name);

  return (
    <div className={`trainers-card ${withBg ? 'with-bg' : ''}`}>
      <div className="trainer-item-wrapper">
        <div className="container-45">
          <img src={imgSrc} alt={trainer.name} className="trainer-image" />
        </div>
        <div className="container-50">
          <img src={QuoteImg} className="quote-image" />
          <h2>{trainer.quote}</h2>
          <div className="trainer-name-wrapper">
            <p className="no-bottom-margin">{trainer.name},</p>
            <br />
            <p className="no-bottom-margin">{trainer.role}</p>
          </div>
          <a href="" className="link-button w-inline-block">
            <div>Read trainer's story</div>
          </a>
        </div>
      </div>
    </div>
  );
;}

export default TrainerCard;
