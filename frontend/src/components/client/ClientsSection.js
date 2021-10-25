import React from 'react'
import Square from '../../assets/square.png';

function ClientsSection() {
  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <div className="relative flex flex-col justify-center items-center select-none mb-10 text-center">
        <h2 style={{zIndex: '-1'}} className="absolute uppercase font-bold text-6xl text-gray-100">what they are saying</h2>
        <h4 className="text-4xl font-semibold leading-6">Client's Sayings</h4>
        <p className="text-center text-lg">feedback from consumers.</p>
      </div>
      <div className="w-full flex justify-center items-center gap-6 lg:flex-row flex-col p-4">
        <div className="border shadow hover:shadow-2xl duration-300 p-4 flex flex-col gap-2 w-full lg:w-60">
          <div className="border shadow rounded-full overflow-hidden mx-auto p-2 w-20 select-none">
            <img src={Square} alt="Square" className="w-full h-full" />
          </div>
          <h3 className="text-center truncate text-3xl tracking-tighter font-semibold">John Doe</h3>
          <hr />
          <p className="text-center text-sm">"Insert a good feedback here, would put lorem ipsum but i used it too much already."</p>
          <hr />
          <h5 className="text-gray-400 text-xs text-right">- Mom's Basement</h5>
        </div>
        <div className="border shadow hover:shadow-2xl duration-300 p-4 flex flex-col gap-2 w-full lg:w-60 transform lg:scale-110">
          <div className="border shadow rounded-full overflow-hidden mx-auto p-2 w-20 select-none">
            <img src={Square} alt="Square" className="w-full h-full" />
          </div>
          <h3 className="text-center truncate text-3xl tracking-tighter font-semibold">Jane Coop</h3>
          <hr />
          <p className="text-center text-sm">"Insert a good feedback here, would put lorem ipsum but i used it too much already."</p>
          <hr />
          <h5 className="text-gray-400 text-xs text-right">- Mom's Basement</h5>
        </div>
        <div className="border shadow hover:shadow-2xl duration-300 p-4 flex flex-col gap-2 w-full lg:w-60">
          <div className="border shadow rounded-full overflow-hidden mx-auto p-2 w-20 select-none">
            <img src={Square} alt="Square" className="w-full h-full" />
          </div>
          <h3 className="text-center truncate text-3xl tracking-tighter font-semibold">Joe Dough</h3>
          <hr />
          <p className="text-center text-sm">"Insert a good feedback here, would put lorem ipsum but i used it too much already."</p>
          <hr />
          <h5 className="text-gray-400 text-xs text-right">- Mom's Basement</h5>
        </div>
      </div>
    </div>
  )
}

export default ClientsSection
