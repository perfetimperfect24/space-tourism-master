import React from 'react';
import TechTabs from '../components/TechTabs';
import Navigation from '../components/Navigation';

export default function Technology() {
  return (
    <div className='bg-tech-bg-mobile md:bg-tech-bg-tablet lg:bg-tech-bg bg-cover h-screen md:h-full lg:h-screen '>
      <div className=''>
        <Navigation />
      </div>
      <div className='text-center my-8 md:text-left md:ml-12'>
        <span className='text-white text-default md:text-mobile lg:text-xl '>
          03 TECHNOLOGY
        </span>
      </div>
      <TechTabs />
    </div>
  );
}
