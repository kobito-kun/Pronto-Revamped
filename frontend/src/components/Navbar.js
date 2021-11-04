import React, {useState, useEffect} from 'react'
import SquareLogo from '../assets/square.png';
import { Link } from 'react-router-dom';

function Navbar() {

  const [toggled, setToggled] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(localStorage.getItem("loggedIn"));
  }, [])

  return (
    <div className="shadow-lg w-full fixed top-0 left-0 backdrop-filter backdrop-blur-sm z-20">
      <div className="p-4 max-w-screen-xl mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={SquareLogo} alt="Square Pronto Logo" className="h-12 select-none" />
        </Link>
        <div className="lg:flex lg:gap-4 items-center hidden">
          {loggedIn
          ?
          <Link to="/dashboard" className="cursor-pointer hover:text-gray-500 duration-300">Dashboard</Link>
          :
          <Link to="/login" className="cursor-pointer hover:text-gray-500 duration-300">Login</Link>
          }
          {loggedIn
          ?
          <Link to="/logout"><button className="hover:bg-white shadow-lg hover:text-black duration-300 bg-black text-white font-bold px-4 py-2">Logout</button></Link>
          :
          <Link to="/signup"><button className="hover:bg-white shadow-lg hover:text-black duration-300 bg-black text-white font-bold px-4 py-2">Sign Up</button></Link>
          }
        </div>
        <div onClick={() => setToggled(!toggled)} className="cursor-pointer hover:text-gray-600 duration-300 lg:hidden flex">
          {
            toggled
            ?
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          }
        </div>
      </div>
      {
        toggled 
        ?
        <div className="w-full">
          {loggedIn
          ?
          <Link to="/dashboard">
            <div className="hover:bg-gray-100 cursor-pointer duration-300 text-xl text-center border-b py-4">Dashboard</div>
          </Link>
          :
          <Link to="/login">
            <div className="hover:bg-gray-100 cursor-pointer duration-300 text-xl text-center border-b py-4">Login</div>
          </Link>
          }
          {loggedIn
          ?
          <Link to="/logout">
            <div className="hover:bg-gray-100 cursor-pointer duration-300 text-xl text-center border-b py-4">Logout</div>
          </Link>
          :
          <Link to="/signup">
            <div className="hover:bg-gray-100 cursor-pointer duration-300 text-xl text-center border-b py-4">Sign Up</div>
          </Link>
          }
        </div>
        :
        null
      }
    </div>
  )
}

export default Navbar
