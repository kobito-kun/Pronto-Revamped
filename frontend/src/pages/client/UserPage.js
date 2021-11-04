import React, {useEffect, useState} from 'react'
import User from '../../components/client/User';
import Navbar from '../../components/Navbar'

function UserPage({match}) {

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
      <User username={match.params.username} />
    </div>
  )
}

export default UserPage
