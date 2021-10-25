import React from 'react'
import { useHistory } from 'react-router'

function Error() {

  const History = useHistory();


  return (
    <div class="min-h-screen max-w-screen-xl mx-auto flex flex-col justify-center items-center">
      <h3 class="text-9xl font-extrabold">404</h3>
      <h4 class="text-3xl font-bold">Not Found!</h4>
      <p class="text-lg">There seems to be nothing at this page!</p>
      <button onClick={() => History.goBack()} class="bg-black hover:bg-white shadow-lg hover:text-black text-white px-4 py-2 duration-300">Go Back</button>
    </div>
  )
}

export default Error
