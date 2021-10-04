import React from 'react';

const Course = (props) => {
     const {id, img, price, teacher, title} = props.course || {};
     return (
          <div class="col">
               <div class="card h-100">
                    <img width="270px" height="150px" src={img} class="card-img-top" alt="..."/>
                     <div class="card-body">
                     <h5 class="card-title">{title}</h5>
                     <h6 class="card-title">Teacher : {teacher}</h6>

                    <p class="card-text"></p>
                     </div>
                    <div class="card-footer">
                    <p class="text-muted"><i class="fab fa-opencart"></i>   Price : {price}</p>
                    </div>
                </div>
          </div>
     );
};

export default Course;