import React from 'react'
import ClientsSection from '../../components/client/ClientsSection'
import Hero from '../../components/client/Hero'
// import MainSection from '../../components/client/MainSection'
import WhySection from '../../components/client/WhySection'
import Navbar from '../../components/Navbar'

function MainPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <MainSection /> */}
      <WhySection />
      <ClientsSection />
    </div>
  )
}

export default MainPage
