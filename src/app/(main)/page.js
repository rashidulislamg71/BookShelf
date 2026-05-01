import React from 'react'
import MarqueeComponent from '@/components/share/Marquee'
import HeroSection from '@/components/HeroSection'

function HomePage() {
  return (
    <div>
      <HeroSection />
      <HeroSection />
      <MarqueeComponent />
    </div>
  )
}

export default HomePage