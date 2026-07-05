import React from 'react'
import Login from './Login'
import Result from './Result'
import Nav from './Nav'
import Footer from './Footer'
import BackToTop from './BackToTop'


export default function App() {
  return (
    <div className="w-screen h- flex items-center justify-center md:pt-20 pt-18">
      <div className='w-full md:w-6xl h-full'>
        <Nav />
        {/* <Login /> */}
        <Result/>
        <div className='bg-transparent w-screen h-[80vh]'></div>
        <Footer/>

        <BackToTop/>
      </div>


      {/* <div className='w-full h-full fixed flex items-center justify-center top-0 left-0 mix-blend-difference'>
        <div className='w-sm h-full border-r border-white/7'></div>
        <div className="w-full h-full border-r border-white/7"></div>
        <div className="w-full h-full border-r border-white/7"></div>
        <div className="w-full h-full border-r border-white/7"></div>
        <div className="w-full h-full border-r border-white/7"></div>
        <div className="w-full h-full border-r border-white/7"></div>
        <div className='w-sm'></div>
      </div> */}
    </div>
  )
}
