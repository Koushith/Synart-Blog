import React from 'react';
import Link from 'next/link';
export const Header = () => {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='flex flex-col items-center justify-between lg:flex-row bg-white'>
        <div className='mb-10 lg:max-w-lg lg:pr-5 lg:mb-0 lg:w-2/5'>
          <div className='max-w-xl mb-6'>
            <h2 className='max-w-lg mb-6 font-sans font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
              <span className=' text-4xl xl:inline'>Let Robots Do your </span>
              <span className=' text-4xl text-red-500  xl:inline'>Jobs </span>
            </h2>
            <p className='text-base text-gray-700 md:text-lg'>
              we offer intelligent automation solutions that are designed to take over repetitive, mental tasks and
              increase efficiency.
            </p>
          </div>
          <div className='flex flex-col items-center md:flex-row'>
            <Link href=''>
              <a
                target='_next'
                className='inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-red-500 hover:text-gray-900 focus:shadow-outline focus:outline-none'
              >
                <span className='mr-3'>Learn More</span>
              </a>
            </Link>
          </div>
        </div>
        <div className='relative lg:w-3/5'>
          <img className=' w-full h-56 rounded  sm:h-96' src='./hero.png' alt='robo' />
        </div>
      </div>
    </div>
  );
};
