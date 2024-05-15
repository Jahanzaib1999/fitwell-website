import React from 'react';

import './ClassesSection.css'
import { allClassesData } from '../../constants/constants';
import ClassCard from '../class-card/ClassCard';

const ClassesSection = ({  isHomePage }) => {
  const classesToRender = isHomePage ? allClassesData.slice(0, 4) : allClassesData;

  return (
    <section className="classes-section container">
      <h2>Our Classes</h2>
      <p>These are just a few of the many classes you can choose from.</p>
      <div className="classes-grid">
        {classesToRender.map((classData, index) => (
          <ClassCard key={index} {...classData} />
        ))}
      </div>
    </section>
  );
};

export default ClassesSection;
