import React from 'react'
import Block from '../../assets/square.png';

function WhySection() {
  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <div className="relative flex flex-col justify-center items-center select-none mb-10">
        <h2 style={{zIndex: '-1'}} className="absolute uppercase font-bold text-6xl text-gray-100">tell me why</h2>
        <h4 className="text-4xl font-semibold leading-6">Why Us?</h4>
        <p className="text-center text-lg">here are some reasons why.</p>
      </div>
      <div className="lg:grid-cols-2 grid w-3/4 p-4 items-center gap-4 mx-auto">
        <div className="mx-auto">
          <img src={Block} alt="Square" className="" />
        </div>
        <div className="mx-auto">
          <h3 className="font-semibold text-lg text-center">Highly Advanced</h3>
          <p className="text-center text-sm">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
      </div>
      <div className="lg:grid-cols-2 grid w-3/4 p-4 items-center gap-4 mx-auto">
        <div className="mx-auto">
          <h3 className="font-semibold text-lg text-center">Futuristic Security</h3>
          <p className="text-center text-sm">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
        <div className="mx-auto">
          <img src={Block} alt="Square" className="" />
        </div>
      </div>
      <div className="lg:grid-cols-2 grid w-3/4 p-4 items-center gap-4 mx-auto">
        <div className="mx-auto">
          <img src={Block} alt="Square" className="" />
        </div>
        <div className="mx-auto">
          <h3 className="font-semibold text-lg text-center">Instant Payments</h3>
          <p className="text-center text-sm">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
      </div>
      <div className="border w-full shadow-xl mt-10"></div>      
    </div>
  )
}

export default WhySection
