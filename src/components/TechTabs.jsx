import React from 'react';
import LaunchVehicle from '../assets/technology/image-launch-vehicle-portrait.jpg';
import SpaceCapsule from '../assets/technology/image-space-capsule-portrait.jpg';
import Spaceport from '../assets/technology/image-spaceport-portrait.jpg';

export default function TechTabs() {
  const [toggleState, setToggleState] = React.useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <div className='flex flex-col lg:flex-row-reverse items-center justify-center lg:gap-24'>
        <div>
          <img
            className={
              toggleState === 1
                ? 'w-44 md:w-80 h-56 md:h-96 lg:h-full lg:w-full content active-content'
                : 'content'
            }
            src={LaunchVehicle}
            alt='Launch Vehicle'
          />
          <img
            className={
              toggleState === 2
                ? 'w-44 md:w-80 h-56 md:h-96 lg:h-full lg:w-full content active-content'
                : 'content'
            }
            src={SpaceCapsule}
            alt='Space Capsule'
          />
          <img
            className={
              toggleState === 3
                ? 'w-44 md:w-80 h-56 md:h-96 lg:h-full lg:w-full content active-content'
                : 'content'
            }
            src={Spaceport}
            alt='Spaceport'
          />
        </div>

        <div className='lg:flex lg:gap-16 md:gap-0 '>
          <div className='flex justify-center mt-8 lg:flex-col lg:justify-center text-default md:text-mobile lg:text-2xl '>
            <button
              onClick={() => toggleTab(1)}
              className='h-10 md:h-16 md:w-16 lg:w-20 lg:h-20 w-10 text-white border-2 border-gray rounded-full focus:bg-white focus:text-black mr-4 lg:mr-0 lg:mb-4 '
            >
              1
            </button>
            <button
              onClick={() => toggleTab(2)}
              className='h-10 w-10 md:h-16 md:w-16 lg:w-20 lg:h-20 text-white border-2 border-gray rounded-full focus:bg-white focus:text-black mr-4 lg:mr-0 lg:mb-4 '
            >
              2
            </button>
            <button
              onClick={() => toggleTab(3)}
              className=' h-10 w-10 md:h-16 md:w-16 lg:w-20 lg:h-20 text-white border-2 border-gray focus:bg-white focus:text-black rounded-full'
            >
              3
            </button>
          </div>
          <div className=' text-center mt-9  lg:text-left '>
            {/* ONE */}
            <div
              className={
                toggleState === 1
                  ? 'content active-content lg:w-500'
                  : 'content'
              }
            >
              <h2 className=' text-blue text-sm md:text-default mb-2'>
                THE TERMINOLOGY
              </h2>
              <h2 className=' text-white text-mobile md:text-2xl lg:text-3xl mb-4'>
                LAUNCH VEHICLE
              </h2>

              <p className='text-white text-default lg:text-lg mx-8 md:w-458 lg:mx-0 leading-6 md:leading-7 lg:left-8 '>
                A launch vehicle or carrier rocket is a rocket-propelled vehicle
                used to carry a payload from Earth's surface to space, usually
                to Earth orbit or beyond. Our WEB-X carrier rocket is the most
                powerful in operation. Standing 150 metres tall, it's quite an
                awe-inspiring sight on the launch pad!
              </p>
            </div>

            {/* TWO */}
            <div
              className={
                toggleState === 2
                  ? 'content active-content lg:w-500'
                  : 'content'
              }
            >
              <h2 className='text-white text-sm md:text-default mb-2'>
                THE TERMINOLOGY
              </h2>
              <h2 className='text-white text-mobile md:text-2xl lg:text-3xl mb-4'>
                THE SPACEPORT
              </h2>

              <p className='text-white text-default lg:text-lg leading-6 md:leading-7 lg:left-8 '>
                A spaceport or cosmodrome is a site for launching (or receiving)
                spacecraft, by analogy to the seaport for ships or airport for
                aircraft. Based in the famous Cape Canaveral, our spaceport is
                ideally situated to take advantage of the Earth’s rotation for
                launch.
              </p>
            </div>

            {/* THREE */}
            <div
              className={
                toggleState === 3
                  ? 'content active-content lg:w-500'
                  : 'content'
              }
            >
              <h2 className='text-white text-sm md:text-default mb-2'>
                THE TERMINOLOGY
              </h2>
              <h2 className='text-white text-mobile md:text-2xl lg:text-3xl mb-4'>
                SPACE CAPSULE
              </h2>

              <p className='text-white text-default lg:text-lg leading-6 md:leading-7 lg:left-8 '>
                A space capsule is an often-crewed spacecraft that uses a
                blunt-body reentry capsule to reenter the Earth's atmosphere
                without wings. Our capsule is where you'll spend your time
                during the flight. It includes a space gym, cinema, and plenty
                of other activities to keep you entertained.
              </p>
            </div>
          </div>

          {/* FOUR */}
        </div>
      </div>
    </div>
  );
}
