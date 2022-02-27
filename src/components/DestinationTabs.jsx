import React from 'react';
import Moon from '../assets/destination/image-moon.png';
import Mars from '../assets/destination/image-mars.png';
import Titan from '../assets/destination/image-titan.png';
import Europa from '../assets/destination/image-europa.png';

export default function DestinationTabs() {
  const [toggleState, setToggleState] = React.useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <div className='mx-auto'>
        <div className='flex flex-col lg:flex-row lg:justify-around justify-center content-center text-center items-center'>
          {/*   FLEX CONTAINER FOR PIC AND TABS*/}
          <div className=''>
            <div className=''>
              {/*  IMAGES  */}
              <img
                className={
                  toggleState === 1
                    ? ' w-44 md:w-72 md:h-72 h-44 lg:h-full lg:w-full content active-content'
                    : 'content'
                }
                src={Moon}
                alt='moon'
              />
              <img
                className={
                  toggleState === 2
                    ? ' w-44 md:w-72 md:h-72 lg:h-full lg:w-full h-44 content active-content'
                    : 'content'
                }
                src={Mars}
                alt='mars'
              />
              <img
                className={
                  toggleState === 3
                    ? ' w-44 md:w-72 md:h-72 h-44 lg:h-full lg:w-full content active-content'
                    : 'content'
                }
                src={Titan}
                alt='titan'
              />
              <img
                className={
                  toggleState === 4
                    ? ' w-44 md:w-72 md:h-72 h-44 lg:h-full lg:w-full content active-content'
                    : 'content'
                }
                src={Europa}
                alt='europa'
              />
            </div>
          </div>

          <div className=' mt-12 lg:text-left'>
            <div className=''>
              <button
                onClick={() => toggleTab(1)}
                className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
              >
                Moon
              </button>
              <button
                onClick={() => toggleTab(2)}
                className={toggleState === 2 ? 'tabs active-tabs' : 'tabs '}
              >
                Mars
              </button>
              <button
                onClick={() => toggleTab(3)}
                className={toggleState === 3 ? 'tabs active-tabs' : 'tabs '}
              >
                Titan
              </button>
              <button
                onClick={() => toggleTab(4)}
                className={toggleState === 4 ? 'tabs active-tabs' : 'tabs '}
              >
                Europa
              </button>
            </div>

            {/* MOON */}
            <div className='grow mt-5'>
              <div
                className={
                  toggleState === 1 ? 'content active-content' : 'content'
                }
              >
                <h2 className=' text-white text-3xl md:text-tablet lg:text-4xl'>
                  Moon
                </h2>
                <p className='text-white text-default lg:text-lg divide-y-2 divide-gray md:w-458 leading-6 md:leading-7 lg:left-8 mx-8 lg:mx-0 '>
                  See our planet as you’ve never seen it before. A perfect
                  relaxing trip away to help regain perspective and come back
                  refreshed. While you’re there, take in some history by
                  visiting the Luna 2 and Apollo 11 landing sites.
                </p>
                <hr className='bg-gray my-8 mx-8' />
                <div className='md:flex justify-between'>
                  <div className=' mb-8'>
                    <h3 className='text-white text-sm'>Avg. Distance</h3>
                    <p className='text-white text-xl'>384,400 km</p>
                  </div>
                  <div>
                    <h3 className='text-white text-sm'>Est. travel time</h3>
                    <p className='text-white text-xl'>3 days </p>
                  </div>
                </div>
              </div>

              {/* MARS */}
              <div
                className={
                  toggleState === 2 ? 'content active-content' : 'content'
                }
              >
                <h2 className='text-white text-3xl md:text-tablet lg:text-4xl'>
                  Mars
                </h2>
                <p className='text-white text-default md:w-458 leading-6 md:leading-7 lg:left-8 mx-8 lg:mx-0'>
                  Don’t forget to pack your hiking boots. You’ll need them to
                  tackle Olympus Mons, the tallest planetary mountain in our
                  solar system. It’s two and a half times the size of Everest!
                </p>
                <hr className='bg-gray my-8 mx-8' />
                <div className=' md:flex justify-between '>
                  <div className='mb-8'>
                    <h3 className='text-white text-sm'>Avg. distance</h3>
                    <p className='text-white text-xl'>225 mil. km</p>
                  </div>
                  <div>
                    <h3 className='text-white text-sm'>Est. travel time</h3>
                    <p className='text-white text-xl'>9 months</p>
                  </div>
                </div>
              </div>

              {/* TITAN */}
              <div
                className={
                  toggleState === 3 ? 'content active-content' : 'content'
                }
              >
                <h2 className='text-white text-3xl md:text-tablet lg:text-4xl'>
                  Titan
                </h2>
                <p className='text-white text-default md:w-458 leading-6 md:leading-7 lg:left-8 mx-8 lg:mx-0  '>
                  The only moon known to have a dense atmosphere other than
                  Earth, Titan is a home away from home (just a few hundred
                  degrees colder!). As a bonus, you get striking views of the
                  Rings of Saturn.
                </p>
                <hr className='bg-gray my-8 mx-8' />
                <div className='md:flex justify-between'>
                  <div className='mb-8'>
                    <h3 className='text-white text-sm'>Avg. distance</h3>
                    <p className='text-white text-xl'>1.6 bil. km </p>
                  </div>
                  <div>
                    <h3 className='text-white text-sm'>Est. travel time</h3>
                    <p className='text-white text-xl'>7 year</p>
                  </div>
                </div>
              </div>

              {/* EUROPA */}
              <div
                className={
                  toggleState === 4 ? 'content active-content' : 'content'
                }
              >
                <h2 className='text-white text-3xl md:text-tablet lg:text-4xl'>
                  Europa
                </h2>
                <p className='text-white text-default md:w-458 leading-6 md:leading-7 lg:left-8 mx-8 lg:mx-0 '>
                  The smallest of the four Galilean moons orbiting Jupiter,
                  Europa is a winter lover’s dream. With an icy surface, it’s
                  perfect for a bit of ice skating, curling, hockey, or simple
                  relaxation in your snug wintery cabin.
                </p>
                <hr className='bg-gray my-8 mx-8' />
                <div className='md:flex justify-between'>
                  <div className='mb-8'>
                    <h3 className='text-white text-sm'>Avg. distance</h3>
                    <p className='text-white text-xl'>628 mil. km </p>
                  </div>
                  <div>
                    <div>
                      <h3 className='text-white text-sm'>Est. travel time</h3>
                      <p className='text-white text-xl'>3 years</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
