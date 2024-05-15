import React from 'react';

import { NavLink, useLocation } from 'react-router-dom';

import FitwellLogo from '../../assets/images/fitwell-logo.png';

import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav id="navbar" className="navbar">
      <div className="nav-wrapper">
        <div className="navbar-logo-wrapper">
          <NavLink to="/">
            <img src={FitwellLogo} alt="Logo" className="logo-img" />
          </NavLink>
        </div>
        <ul id="navlist" className="navlist">
          <li>
            <NavLink
              to="/"
              className={location.pathname === '/' ? 'nav-item active-nav-item' : 'nav-item'}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={location.pathname === '/about' ? 'nav-item active-nav-item' : 'nav-item'}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/classes"
              className={location.pathname === '/classes' ? 'nav-item active-nav-item' : 'nav-item'}
            >
              Classes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/plans"
              className={location.pathname === '/plans' ? 'nav-item active-nav-item' : 'nav-item'}
            >
              Plans
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/trainers"
              className={
                location.pathname === '/trainers' ? 'nav-item active-nav-item' : 'nav-item'
              }
            >
              Trainers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={location.pathname === '/contact' ? 'nav-item active-nav-item' : 'nav-item'}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <button className="cta-button">Join Now</button>
      </div>
    </nav>
  );
};

export default Navbar;
