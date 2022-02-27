import React from 'react';
import CrewTabs from '../components/CrewTabs';
import Navigation from '../components/Navigation';

export default function Crew() {
  return (
    <div
      className='bg-crew-bg-mobile md:bg-crew-bg-tablet lg:bg-crew-bg-desktop bg-cover md:h-full h-screen
     lg:h-full'
    >
      <div className=''>
        <Navigation />
      </div>
      <div className='lg:mb-20 lg:ml-20 text-center mb-12 md:text-left md:ml-12 md:mb-16'>
        <span className='text-white text-default md:text-mobile lg:text-xl'>
          02 MEET YOUR CREW
        </span>
      </div>
      <CrewTabs />
    </div>
  );
}
