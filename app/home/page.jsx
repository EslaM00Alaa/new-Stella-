import React from 'react';
import Header from '../_components/nav/nav';
import Intro from './intro/intro';
import AboutIntro from './aboutus/aboutus';
import Service from './services/serv';

import TestimonialCarousel from './feedbacks/feedbacks';
import Footer from '../_components/footer/footer';
import MasterplanSection from './masterplan/sec';
import Activity  from './activity/activity';

const page = () => {
  return (
    <div className='w-full '>
     <Header/>
     <Intro/>
     <AboutIntro/>
     <Service />
     <MasterplanSection  />
     <Activity  />
     <TestimonialCarousel  />
     <Footer />
    </div>
  );
};

export default page;