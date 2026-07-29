import React from 'react'
import { Routes, Route } from 'react-router-dom'
import GrainOverlay from './components/ui/GrainOverlay'
import Nav from '@/components/navigation/Nav'
import Home from '@/pages/Home'
import Leaderboard from '@/pages/Leaderboard'
import About from '@/pages/About'
import PrivacyPolicy from '@/pages/PrivacyPolicy'
import TermsOfUse from '@/pages/TermsOfUse'
import F from '@/components/navigation/F'
import StudyResources from '@/pages/StudyResources'
import IpuResult from '@/pages/IpuResult'
import GridBackground from './components/ui/GridBackground'
import PixelPattern from './components/ui/PixelPattern'
import Sd from './pages/Sd'
import ImageTrailDemo from './pages/ImageTrailDemo'
import Footer from '@/components/navigation/Footer'
import useLenis from '@/components/ui/useLenis'
import FAQs from './components/home/FAQs'
import Login from './components/login/Login'

export default function App() {
  useLenis()

  return (
    <div id="scroll-wrapper" className='w-screen h-screen overflow-y-scroll scrollbar-hide'>
      <div id="scroll-content" className='w-full pointer-events-auto'>
        {/* <Login/> */}
        <Nav />
        {/* <FAQs/> */}

        <Sd />
        {/* <ImageTrailDemo/> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ipu-result" element={<IpuResult />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/study-resources" element={<StudyResources />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
        </Routes>



        <Footer />

        {/* <F /> */}
        <GrainOverlay />
      </div>
    </div>
  )
}