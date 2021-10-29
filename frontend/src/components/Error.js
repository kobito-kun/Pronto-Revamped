import React from 'react'
import { useHistory } from 'react-router'

function Error() {

  const History = useHistory();


  return (
    <div className="min-h-screen max-w-screen-xl mx-auto flex flex-col justify-center items-center">
      <h3 className="text-9xl font-extrabold">404</h3>
      <h4 className="text-3xl font-bold">Not Found!</h4>
      <p className="text-center text-lg">There seems to be nothing at this page!</p>
      <button onClick={() => History.goBack()} className="bg-black hover:bg-white shadow-lg hover:text-black text-white px-4 py-2 duration-300">Go Back</button>
    </div>
  )
}

export default Error
