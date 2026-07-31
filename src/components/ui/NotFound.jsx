import React from 'react'
import LineAni from './LineAni'

export default function NotFound() {
  return (
    <div className='w-full bg-black min-h-screen flex items-end md:p-10 p-6 pb-26 fixed z-999999'>

      <h1 className='md:text-[140vh] md:rotate-0 rotate-90 text-[70vh] -tracking-[6vh] md:-tracking-[6vh] z-99 absolute text-blue-800 font-bold top-1/2 left-1/2 md:pr-10 -translate-x-1/2 -translate-y-1/2'>404</h1>


      <h1 className='md:text-4xl text-2xl tracking-tighter relative z-9999 hidden md:block'>404 Error, Page Not Found. The required URL <br /> doesn't exist. Go to back to
        <a href='/' className='tracking-normal cursor-pointer underline'> myResult®</a>
      </h1>

      <div className='w-full h-full backdrop-blur-md z-999 absolute top-0 left-0'></div>
      {/* <h1 className='text-[60vh] md:rotate-0 rotate-90 tracking-tighter md:-tracking-[6vh] z-99 absolute text-blue-800 font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>404</h1> */}
      <h1 className='md:text-4xl text-2xl tracking-tighter relative z-999 md:hidden'>404 Error, Page Not Found. <br /> The required URL doesn't exist. Go to back to
        <a href='/' className='tracking-normal cursor-pointer underline'> myResult®</a>
      </h1>
    </div>
  )
}
