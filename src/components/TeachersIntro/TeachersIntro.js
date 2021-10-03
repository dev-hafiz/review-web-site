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
                         <div class="card mb-3" style={{maxWidth: "540px"}}>
                         <div class="row g-0">
                         
                         <div class="col-md-8">
                              <div class="card-body">
                              <h5 class="card-title  name-style">Sheila Patterson</h5>
                              <p class="card-text"> I’ve been recognized for my work ethic and effectiveness. I’m greatly passionate about my profession.</p>
                              <p class="card-text">
                              <i class="fab fa-2x fa-linkedin me-2"></i>
                              <i class="fab fa-2x fa-twitter-square me-2"></i>
                              <i class="fab fa-2x fa-reddit-square me-2"></i>
                              </p>
                              </div>
                         </div>

                         <div class="col-md-4">
                              <img src={leftImg} class="img-fluid rounded-start" alt="..." />
                         </div>
                         </div>
                         </div>
                    </div>

                    <div className="cart-right ms-4">
                    <div class="card mb-3" style={{maxWidth: "540px"}}>
                         <div class="row g-0">
                         
                         <div class="col-md-8">
                              <div class="card-body">
                              <h5 class="card-title name-style" >Terry Weaver</h5>
                              <p class="card-text">Ni hao! My name is Terry Weaver from America. I work as an English teacher. It gives me joy and excitement</p>
                              <p class="card-text d-flex me-4">
                              <i class="fab fa-2x fa-linkedin me-2"></i>
                              <i class="fab fa-2x fa-twitter-square me-2"></i>
                              <i class="fab fa-2x fa-reddit-square me-2"></i>
                              </p>
                              </div>
                         </div>

                         <div class="col-md-4">
                              <img src={rightImg} class="img-fluid rounded-start" alt="..." />
                         </div>
                         </div>
                         </div>
                    </div>

            </div>

          </div>
     );
};

export default TeachersIntro;