import React from 'react';
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className='bg-cover bg-home-bg-mobile lg:bg-home-bg-desktop md:bg-home-bg-tablet h-screen md:h-full lg:h-screen flex flex-col gap-14 lg:gap-72'>
      <div className=''>
        <Navigation />
      </div>
      <div className='flex-col lg:flex lg:flex-row lg:justify-between lg:items-end lg:text-left text-center  lg:mx-20 '>
        <div className=' w-80 md:w-458 flex flex-col mx-auto lg:mx-0 lg:justify-between gap-6'>
          <span className='text-default text-blue lg:text-xl md:text-mobile'>
            SO, YOU WANT TO TRAVEL TO
          </span>
          <span className='text-tablet text-white md:text-5xl md:p-0 leading-none'>
            SPACE
          </span>
          <span className='text-default text-blue lg:text-lg'>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </span>
        </div>
        <div className=' mt-20 md:mt-40 lg:mt-0 '>
          <Link to='/destination'>
            <button className='bg-white text-black text-lg md:text-2xl rounded-full w-36 h-36 md:w-60 md:h-60  lg:w-72 lg:h-72'>
              EXPLORE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
