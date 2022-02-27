import React from 'react';
import Doug from '../assets/crew/image-doug.png';
import Mark from '../assets/crew/image-mark.png';
import Victor from '../assets/crew/image-victor.png';
import Anousheh from '../assets/crew/image-anousheh.png';

export default function CrewTabs() {
  const [toggleState, setToggleState] = React.useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div>
      <div className='flex flex-col md:flex-col-reverse lg:flex-row-reverse items-center justify-center'>
        {/*   FLEX CONTAINER FOR PIC*/}
        <div className='lg:h-700 lg:w-500'>
          <img
            className={
              toggleState === 1
                ? ' w-full h-80 md:h-96 lg:h-700 object-contain lg:border-0 border-b-2 border-b-gray active-content'
                : 'content'
            }
            src={Doug}
            alt='doug'
          />
          <img
            className={
              toggleState === 2
                ? 'w-full h-80 md:h-96 lg:h-700 object-contain  lg:border-0 border-b-2 border-b-gray content active-content'
                : 'content'
            }
            src={Mark}
            alt='mark'
          />
          <img
            className={
              toggleState === 3
                ? 'w-full h-80 md:h-96 lg:h-700 object-contain lg:border-0 border-b-2 border-b-gray content active-content'
                : 'content'
            }
            src={Victor}
            alt='victor'
          />
          <img
            className={
              toggleState === 4
                ? 'w-full h-80 md:h-96 lg:h-700 object-contain lg:border-0 border-b-2 border-b-gray content active-content'
                : 'content'
            }
            src={Anousheh}
            alt='anousheh'
          />
        </div>

        <div className='flex flex-col-reverse lg:w-700'>
          <div className='flex justify-center lg:justify-start lg:p-0 lg:pt-5 p-5 '>
            <button
              onClick={() => toggleTab(1)}
              className='h-6 w-6  bg-gray  focus:bg-white active:bg-white rounded-full mr-6'
            ></button>
            <button
              onClick={() => toggleTab(2)}
              className='h-6 w-6 bg-gray  focus:bg-white rounded-full mr-6'
            ></button>
            <button
              onClick={() => toggleTab(3)}
              className='h-6 w-6 bg-gray  focus:bg-white rounded-full mr-6'
            ></button>
            <button
              onClick={() => toggleTab(4)}
              className='h-6 w-6 bg-gray focus:bg-white  rounded-full'
            ></button>
          </div>

          <div className='text-center lg:text-left mt-8'>
            {/* ONE */}
            <div
              className={
                toggleState === 1 ? 'content active-content ' : 'content'
              }
            >
              <h2 className=' text-white text-default md:text-mobile lg:text-2xl mb-2'>
                COMMANDER
              </h2>
              <h2 className=' text-white text-mobile md:text-2xl lg:text-3xl'>
                DOUGLAS HURLEY
              </h2>

              <p className='text-white text-default lg:text-lg mt-4 md:w-458 mx-8 lg:mx-0 leading-6 md:leading-7 lg:left-8 '>
                Douglas Gerald Hurley is an American engineer, former Marine
                Corps pilot and former NASA astronaut. He launched into space
                for the third time as commander of Crew Dragon Demo-2.
              </p>
            </div>

            {/* TWO */}
            <div
              className={
                toggleState === 2 ? 'content active-content ' : 'content'
              }
            >
              <h2 className='text-white text-default md:text-mobile lg:text-2xl mb-2'>
                MISSION SPECIALIST
              </h2>
              <h2 className='text-white text-mobile md:text-2xl lg:text-3xl'>
                MARK SHUTTLEWORTH
              </h2>

              <p className='text-white text-default lg:text-lg mt-4 md:w-458 lg:mx-0 leading-6 md:leading-7 lg:left-8  '>
                Mark Richard Shuttleworth is the founder and CEO of Canonical,
                the company behind the Linux-based Ubuntu operating system.
                Shuttleworth became the first South African to travel to space
                as a space tourist.
              </p>
            </div>

            {/* THREE */}
            <div
              className={
                toggleState === 3 ? 'content active-content' : 'content'
              }
            >
              <h2 className='text-white text-default md:text-mobile lg:text-2xl mb-2'>
                PILOT
              </h2>
              <h2 className='text-white text-mobile md:text-2xl lg:text-3xl'>
                VICTOR GLOVER
              </h2>

              <p className='text-white text-default lg:text-lg mt-4 md:w-458 mx-8 lg:mx-0 leading-6 md:leading-7 lg:left-8'>
                Pilot on the first operational flight of the SpaceX Crew Dragon
                to the International Space Station. Glover is a commander in the
                U.S. Navy where he pilots an F/A-18.He was a crew member of
                Expedition 64, and served as a station systems flight engineer.
              </p>
            </div>

            {/* FOUR */}
            <div
              className={
                toggleState === 4 ? 'content active-content' : 'content'
              }
            >
              <h2 className='text-white text-default md:text-mobile lg:text-2xl mb-2'>
                FLIGHT ENGINEER
              </h2>
              <h2 className='text-white text-mobile md:text-2xl lg:text-3xl'>
                ANOUSHEH ANSARI
              </h2>

              <p className='text-white text-default lg:text-lg mt-t4 md:w-458 mx-8 lg:mx-0 leading-6 md:leading-7 lg:left-8 '>
                Anousheh Ansari is an Iranian American engineer and co-founder
                of Prodea Systems. Ansari was the fourth self-funded space
                tourist, the first self-funded woman to fly to the ISS, and the
                first Iranian in space.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
