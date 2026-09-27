import { useState } from 'react'
import Loader from './components/Loader'
import CustomCursor from './components/CustomCursor'
import HudChrome from './components/HudChrome'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import WhatWeDo from './sections/WhatWeDo'
import Philosophy from './sections/Philosophy'
import Team from './sections/Team'
import ClosingCTA from './sections/ClosingCTA'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <Loader onDone={() => setLoaded(true)} />

      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 500ms ease',
        }}
      >
        <div className="grain" />
        <CustomCursor />
        <HudChrome />
        <Navbar />

        <main>
          <Hero />
          <About />
          <WhatWeDo />
          <Philosophy />
          <Team />
          <ClosingCTA />
        </main>

        <Footer />
      </div>
    </>
  )
}