import React from 'react';

import './ClassesPage.css';
import ClassesSection from '../../components/classes-section/ClassesSection';
import ClassesScheduleSection from '../../components/classes-schedule-section/ClassesScheduleSection';

const ClassesPage = () => {
  return <div>
  <ClassesSection />
  <ClassesScheduleSection/>
  </div>;
};

export default ClassesPage;
