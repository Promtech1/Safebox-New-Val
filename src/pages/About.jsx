import React from 'react'
import AboutHero from '../components/About/AboutHero'
import ProductsSection from '../components/About/ProductsSection'

import AboutUsCarousel from '../components/About/AboutUsCarousel'
import MarqueeSection from '../components/About/MarqueeSection'

const About = () => {
  return (
    <div>
        <AboutHero />
        {/* <ProductsSection /> */}
        {/* <AboutUsCarousel/> */}
        {/* <MarqueeSection /> */}
        <AboutUsCarousel />
        <MarqueeSection />
    </div>
  )
}

export default About