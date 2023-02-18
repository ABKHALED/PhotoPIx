import React from 'react'
import Hero from '../../components/hero/Hero'
import Overlay from '../../components/overlay/Overlay'
import Reasent from '../../components/Reasent/Reasent'
import About from '../../components/about/About'
function Home() {
  return (
    <div className='home'>
      <Overlay />
      <Hero />
      <Reasent />
      <About />
    </div>
  )
}

export default Home
