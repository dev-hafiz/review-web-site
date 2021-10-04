import React from 'react';
import {  NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
     return (
          <div className="footer pt-5 px-5">
               <div className="container row pt-5 mt-5">
                    <div className="col-md-4">
                         <h3 className= "name-style mb-4">LEARNALOGIST</h3>
                         <div>
                              <h4>About Course</h4>
                              <p>Deadlines are just a few days away. You still have time to take the Duolingo English Test! No appointments, no test centers. Results in 2 days. Finish your app before the deadline! 20+ languages offered. Get a free practice test.</p>
                         </div>
                    </div>
                    <div className="col-md-4 text-center">
                         <h5>Learn details</h5>
                         <p><NavLink className=" text-light fs-6" to="/about">About</NavLink></p>
                         <p><NavLink className=" text-light fs-6" to="/services">Services</NavLink></p>
                         <p><NavLink className=" text-light fs-6" to="/strategy">Strategy</NavLink></p>
                         <p><NavLink className=" text-light fs-6" to="/home">Home</NavLink></p>
                    </div>
                    <div className ="input-section col-md-4">
                         <h2 className="mb-3">Write your feedback</h2>
                         <input type="text" name="" id="" placeholder="Your opinion" />
                         <button className="primary-btn">Submit</button>
                    </div>
                    <p className="text-center text-secondary">©okshiHafiz | web privacy policy 2021</p>
               </div>
               
          </div>
     );
};

export default Footer;