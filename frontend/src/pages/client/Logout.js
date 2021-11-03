import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom';

function Logout() {
  
  const history = useHistory();

  useEffect(() => {
    localStorage.clear();
    history.push("/")
    // eslint-disable-next-line
  }, [])
  
  return (
    <div>
      watsup      
    </div>
  )
}

export default Logout
