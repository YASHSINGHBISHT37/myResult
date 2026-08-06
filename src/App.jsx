import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Nav from '@/components/navigation/Nav'
import Footer from '@/components/navigation/Footer'

import Home from '@/pages/Home'
import IpuResult from '@/pages/IpuResult'
import Leaderboard from '@/pages/Leaderboard'
import StudyResources from '@/pages/StudyResources'

import About from '@/pages/About'
import PrivacyPolicy from '@/pages/PrivacyPolicy'
import TermsOfUse from '@/pages/TermsOfUse'

import Sd from './pages/Sd'
import Login from './components/login/Login'

import useLenis from '@/components/ui/useLenis'
import Cursor from './components/ui/Cursor'
import GrainOverlay from './components/ui/GrainOverlay'
import NotFound from './components/ui/NotFound'
import Loading from './components/ui/Loading'


export default function App() {
  useLenis()

  return (
    <div id="scroll-wrapper" className='w-screen h-screen overflow-y-scroll scrollbar-hide'>
      <div id="scroll-content" className='w-full pointer-events-auto'>
        {/* <Login /> */}
        {/* <Sd /> */}

        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ipu-result" element={<IpuResult />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/study-resources" element={<StudyResources />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* <Footer /> */}


        {/* <div className="fixed inset-0 pointer-events-none z-9999 hidden md:block"><Cursor /></div> */}
        {/* <GrainOverlay /> */}
        {/* <Loading/> */}
      </div>
    </div>
  )
}