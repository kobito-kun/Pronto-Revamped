import React, {useEffect, useState} from 'react'
import Navbar from '../../components/Navbar'

function UserPage() {

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(localStorage.getItem("loggedIn"));
  }, [])

  return (
    <div>
      {
        loggedIn
        ?
        <Navbar />
        :
        ""
      }
    </div>
  )
}

export default UserPage
