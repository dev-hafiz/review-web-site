import React from 'react';
import errorlogo from '../../images/404.gif';
const NotFound = () => {
     return (
          <div className="text-center">
               <img src={errorlogo} alt="" />
          </div>
     );
};

export default NotFound;