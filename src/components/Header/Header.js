import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo1.jpg';
import './Header.css';

const Header = () => {
     return (
          <div className="header container">
               <div className="logo d-flex justify-content-center align-items-center">
                    <img src={logo} alt="" />
                    <h3 className="logo-text">Learnalogist</h3>
               </div>
               <nav>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/strategy">Strategy</NavLink>
               </nav>
          </div>
     );
};

export default Header;