import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/shared/logo.svg';

export default function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <header className='flex justify-between md:items-center'>
      <div>
        <Link to='/'>
          <img src={Logo} alt='Logo' className=' m-8' />
        </Link>
      </div>

      <button
        className='absolute w-8 aspect-square z-[9999] top-8 right-8 bg-hamburger-bg bg-no-repeat md:hidden'
        onClick={toggleMenu}
      >
        <span className='sr-only'>Menu</span>
      </button>

      <nav>
        <ul
          className={
            isOpen
              ? 'fixed bg-red text-default left-1/3 h-full w-full md:w-auto md:h-auto pt-40 px-8 bg-opacity-10 backdrop-blur-md text-white md:static md:flex md:m-4 md:p-8'
              : ' hidden md:flex text-white md:bg-red md:backdrop-blur-md md:bg-opacity-10 md:p-8 md:gap-4 md:m-4 '
          }
        >
          <li className='md:mr-4 mb-8 md:mb-0'>
            <span className='pr-2'>00</span>

            <Link to='/'>Home</Link>
          </li>
          <li className='md:mr-4  mb-8 md:mb-0'>
            <span className='pr-2'>01</span>
            <Link to='/destination'>Destination</Link>
          </li>
          <li className='md:mr-4 mb-8 md:mb-0'>
            <span className='pr-2'>02</span>
            <Link to='/crew'>Crew</Link>
          </li>
          <li>
            <span className='pr-2 mb-8 md:mb-0'>03</span>
            <Link to='/technology'>Technology</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
