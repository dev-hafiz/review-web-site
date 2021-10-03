import React from 'react';
import DemoCourse from '../DemoCourse/DemoCourse';
import TeachersIntro from '../TeachersIntro/TeachersIntro';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
     return (
          <div>
               <TopBanner></TopBanner>
               <TeachersIntro></TeachersIntro>
               <DemoCourse></DemoCourse>
          </div>
     );
};

export default Home;