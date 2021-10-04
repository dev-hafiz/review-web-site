import React from 'react';
import leftImg from '../../images/teacherFemale.jpg';
import rightImg from '../../images/teacher1.jpg';
import './TeachersIntro.css';
const TeachersIntro = () => {
     return (
          <div className="container m-5 p-5">
               <div className="border-start p-2 border-4 mb-5">
               <h2>TEACHER'S INTRO...</h2>
               <p>They are top educated, qualified and teacher in the state</p>
               </div>

          {/* TEACHER CART WRAPPER SECTION */}
            <div className="cart-Wrapper d-flex ">
                    <div className="cart-left me-4">
                         <div className="card mb-3" style={{maxWidth: "540px"}}>
                         <div className="row g-0">
                         
                         <div className="col-md-8">
                              <div className="card-body">
                              <h5 className="card-title  name-style">Sheila Patterson</h5>
                              <p className="card-text"> I’ve been recognized for my work ethic and effectiveness. I’m greatly passionate about my profession.</p>
                              <p className="card-text">
                              <i className="fab fa-2x fa-linkedin me-2"></i>
                              <i className="fab fa-2x fa-twitter-square me-2"></i>
                              <i className="fab fa-2x fa-reddit-square me-2"></i>
                              </p>
                              </div>
                         </div>

                         <div className="col-md-4">
                              <img src={leftImg} className="img-fluid rounded-start" alt="..." />
                         </div>
                         </div>
                         </div>
                    </div>

                    <div className="cart-right ms-4">
                    <div className="card mb-3" style={{maxWidth: "540px"}}>
                         <div className="row g-0">
                         
                         <div className="col-md-8">
                              <div className="card-body">
                              <h5 className="card-title name-style" >Terry Weaver</h5>
                              <p className="card-text">Ni hao! My name is Terry Weaver from America. I work as an English teacher. It gives me joy and excitement</p>
                              <p className="card-text d-flex me-4">
                              <i className="fab fa-2x fa-linkedin me-2"></i>
                              <i className="fab fa-2x fa-twitter-square me-2"></i>
                              <i className="fab fa-2x fa-reddit-square me-2"></i>
                              </p>
                              </div>
                         </div>

                         <div className="col-md-4">
                              <img src={rightImg} className="img-fluid rounded-start" alt="..." />
                         </div>
                         </div>
                         </div>
                    </div>

            </div>

          </div>
     );
};

export default TeachersIntro;