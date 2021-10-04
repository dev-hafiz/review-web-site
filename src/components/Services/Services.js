import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Services = () => {
     const [courses, setCourses] = useState([])
     useEffect( ()=>{
          fetch('/courses.json')
          .then(res => res.json())
          .then(data => setCourses(data))
     },[])
     return ( 
          <div className = "container my-5 pb-5">
               <h1 className ="border-start p-2 border-4 my-5">All Courses </h1>

               <div class="row row-cols-1 row-cols-md-4 g-4">
               {
                    courses.map(course => <Course key={course.id} course={course}></Course>)  
               }
               </div>
          </div>
     );
};

export default Services;