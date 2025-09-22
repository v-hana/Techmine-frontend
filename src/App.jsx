import React from 'react'
import HeroSection from './components/HeroSection'
import About from './components/about'
import FeaturesSection from './components/Features' 

const App = () => {
  return (
    <div className='w-full'>
      <HeroSection />
      <About />
      <FeaturesSection/>
    </div>
  )
}

export default App
