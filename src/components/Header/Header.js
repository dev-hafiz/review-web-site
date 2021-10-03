import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo1.jpg';
import './Header.css';

const Header = () => {
     return (
          <div className="header container">
               <div className="logo">
                    <img src={logo} alt="" />
               </div>
               <nav>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/stratagy">Strategy</NavLink>
               </nav>
          </div>
     );
};

export default Header;