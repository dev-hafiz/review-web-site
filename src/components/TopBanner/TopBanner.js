import React from 'react';
import './TopBanner.css';

const TopBanner = () => {
     return (
          <div  style={{ 
               backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url(/topbanner.jpg)" ,backgroundRepeat:"no-repeat", backgroundPosition : "center", backgroundSize : "cover", height: "100vh"
             }}>
               <div className="headin-top">
                   <div className="child-div">
                   <h1>EFFICIENT COURSES TO LEARN</h1>
                    <p>This course will helpfull those people who are trying to make best</p>
                    <input type="text" name="" placeholder="Search your course" id="" />
                    <button className="primary-btn">search</button>
                   </div>
               </div>
          </div>
     );
};

export default TopBanner;