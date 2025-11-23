import React from 'react';
import Header from '../_components/nav/nav';
import Intro from './intro/intro';
import AboutIntro from './aboutus/aboutus';
import Service from './services/serv';
import TestimonialCarousel from './feedbacks/feedbacks';
import Footer from '../_components/footer/footer';
import MasterplanSection from './masterplan/sec';
import Activity  from './activity/activity';
import SectionImage from './sec/section';
import Contactus from './contactus/contactus';
import Support from '../_components/support/support';

const page = () => {
  return (
    <div className='w-full relative '>
     <Header/>
     <Support/>
     <Intro/>
     
     <AboutIntro/>
     <Service />
     <MasterplanSection  />
     <Activity  />
     <TestimonialCarousel  />
     <SectionImage  />

     <Contactus />
     <Footer />
    </div>
  );
};

export default page;