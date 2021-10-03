import React from 'react';
import demoOne from '../../images/demo1.jpg';
import demoTwo from '../../images/demo2.jpg';
import demoThree from '../../images/demo3.jpg';
import demoFour from '../../images/demo5.jpg';

const DemoCourse = () => {
     return (
          <div className="container p-5 m-5  border-right">
               <div>
                    <h3 className="border-start p-2 border-4 mb-5">COURSES</h3>
               </div>

               {/* COURSE CARD WRAPPER */}
               <div>
               <div class="row row-cols-1 row-cols-md-4 g-4">
                    <div class="col">
                    <div class="card h-100">
                         <img width="270px" height="150px" src={demoOne} class="card-img-top" alt="..."/>
                         <div class="card-body">
                         <h5 class="card-title">Bachelor's Degree in English Language: Program Overview</h5>
                         <p class="card-text"></p>
                         </div>
                         <div class="card-footer">
                         <p class="text-muted"><i class="fab fa-opencart"></i>   Price : $ 220</p>
                         </div>
                    </div>
                    </div>
                    <div class="col">
                    <div class="card h-100">
                         <img width="270px" height="150px" src={demoTwo} class="card-img-top" alt="..."/>
                         <div class="card-body">
                         <h5 class="card-title">Correct use of academic citations and referencing</h5>
                         <p class="card-text"></p>
                         </div>
                         <div class="card-footer">
                         <p class="text-muted"><i class="fab fa-opencart"></i>   Price : $ 140</p>
                         </div>
                    </div>
                    </div>
                    <div class="col">
                    <div class="card h-100">
                         <img  width="270px" height="150px" src={demoThree} class="card-img-top" alt="..."/>
                         <div class="card-body">
                         <h5 class="card-title">Doctorate, First Professional Degree, Master</h5>
                         <p class="card-text"></p>
                         </div>
                         <div class="card-footer">
                         <p class="text-muted"><i class="fab fa-opencart"></i>   Price : $ 170</p>
                         </div>
                    </div>
                    </div>
                    <div class="col">
                    <div class="card h-100">
                         <img width="270px" height="150px" src={demoFour} class="card-img-top" alt="..."/>
                         <div class="card-body">
                         <h5 class="card-title">Awareness of different theoretical schools and approaches to literary criticism</h5>
                         <p class="card-text"></p>
                         </div>
                         <div class="card-footer">
                         <p class="text-muted"><i class="fab fa-opencart"></i>   Price : $ 150</p>
                         </div>
                    </div>
                    </div>
                    </div>
               </div>
          </div>
     );
};

export default DemoCourse;