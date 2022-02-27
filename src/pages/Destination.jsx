import React from 'react';
import DestinationTabs from '../components/DestinationTabs';
import Navigation from '../components/Navigation';

export default function Destination() {
  return (
    <div className=' bg-destination-bg-mobile md:bg-destination-bg-tablet lg:bg-destination-bg-desktop bg-cover h-screen md:h-full lg:h-screen'>
      <div className=''>
        <Navigation />
      </div>
      <div className='lg:mb-20 lg:ml-20 text-center mb-12 md:text-left md:ml-12 md:mb-16'>
        <span className='text-white text-default md:text-mobile lg:text-xl   '>
          01 PICK YOUR DESTINATION
        </span>
      </div>
      <DestinationTabs />
    </div>
  );
}
