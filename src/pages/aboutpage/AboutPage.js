import React from 'react';
import './AboutPage.css';

import JahanImg from '../../assets/images/jahan-img.jpg'

const AboutPage = () => {
  const teamMember = {
    name: 'Jahanzeb Khan',
    username: '@jahan',
    role: 'Web Developer',
    location: 'Sydney',
    email: 'jahanzaib1999@gmail.com',
    experience: '1yr+',
    projects: '14 Projects',
    certificates: '8 certificates',
  };
  return (
    <div>
      <section className="about-main container">
        <div className="about-main-body">
          <h2>Our Mission</h2>
          <p>
            At FitWell Connect, we are committed to fostering fitness and wellness by connecting fitness enthusiasts
            with experienced trainers. Our platform serves as a bridge between clients and fitness professionals,
            providing personalized training sessions and top-notch workout plans.
          </p>
          <br /><br />
          <h2>Our Values</h2>
          <p>
            - Supportive Community<br/>
            - Personalized Training<br/>
            - Accessibility and Flexibility<br/>
            - Comprehensive Wellness Approach
          </p>
        </div>
      </section>

      <section className="team-section container">
        <h2>The Team</h2>
        <div className="cards-wrapper">
          <div className="card-container">
            <img src={JahanImg} alt={teamMember.name} className="profile-img" />

            <div className="profile-card-content">
              <div className="sub-content">
                <h1>{teamMember.name}</h1>
                <div className="black-divider"></div>
                <span>{teamMember.username}</span>
                <p>{teamMember.role}</p>
                <span className="location"><i className="fa fa-map-marker" aria-hidden="true"></i>{teamMember.location}</span>
                <a href={`mailto:${teamMember.email}`}>{teamMember.email}</a>
              </div>
              <div className="person-data">
                <div className="inner-data-wrapper">
                  <div className="inner-data">
                    <span><i className="fa fa-users" aria-hidden="true"></i></span>
                    <p>{teamMember.experience}</p>
                  </div>
                  <div className="inner-data">
                    <span><i className="fa fa-twitter-square" aria-hidden="true"></i></span>
                    <p>{teamMember.projects}</p>
                  </div>
                  <div className="inner-data">
                    <span><i className="fa fa-user-plus" aria-hidden="true"></i></span>
                    <p>{teamMember.certificates}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
  
};

export default AboutPage;
