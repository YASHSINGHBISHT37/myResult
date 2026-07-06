import React from 'react'
import Login from './main/Login'
import Result from './main/Result'
import Nav from './navigation/Nav'
import Footer from './navigation/Footer'
import BackToTop from './components/BackToTop'
import GridBackground from './components/GridBackground'
import SideBar from './components/SideBar'


export default function App() {
  return (
    <div className="w-screen h- flex items-center justify-cente dark:bg-bg bg-bg">
      <div className='w-full h-full'>
        <Nav />
        {/* <Login /> */}
        <Result/>
        <div className='bg-transparent w-screen h-[100vh] pointer-events-auto'></div>
        <Footer/>
        {/* <GridBackground/> */}
        {/* <SideBar/> */}

        <BackToTop/>
      </div>

{/* 
      <div className='w-full h-full fixed flex items-center justify-center top-0 left-0 mix-blend-difference'>
        <div className='w-sm h-full border-r border-white/20'></div>
        <div className="w-full h-full border-r border-white/20"></div>
        <div className="w-full h-full border-r border-white/20"></div>
        <div className="w-full h-full border-r border-white/20"></div>
        <div className="w-full h-full border-r border-white/20"></div>
        <div className="w-full h-full border-r border-white/20"></div>
        <div className='w-sm'></div>
      </div> */}
    </div>
  )
}
