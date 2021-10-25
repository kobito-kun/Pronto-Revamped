import React from 'react'
import CoverLogo from '../../assets/square.png';

function Hero() {
  return (
    <div class="mt-24 flex flex-col justify-center items-center max-w-screen-xl mx-auto">
      <img src={CoverLogo} alt="Cover Pronto Logo" class="h-40 mt-6 select-none" />
      <h3 className="text-center text-5xl font-semibold">Pronto</h3>
      <p className="text-lg text-center">Dreaming into reality.</p>
      <div className="border w-full shadow-xl mt-10"></div>
    </div>
  )
}

export default Hero
