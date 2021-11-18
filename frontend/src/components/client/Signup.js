import React, {useState, useRef, useEffect} from 'react';
import Block from '../../assets/square.png';
import { signup } from '../../resolver/fetch';
import { useHistory } from 'react-router-dom';

function Login() {

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const emailInput = useRef(null);
  const usernameInput = useRef(null);
  const passwordInput = useRef(null);
  const history = useHistory();

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse("");
    signup({
      username: usernameInput.current.value,
      email: emailInput.current.value,
      password: passwordInput.current.value
    }).then(dataResponse => {
      if(dataResponse.status === 200){
        setResponse("Success!");
        setLoading(false);
        history.push("/login");
      }
    }).catch(err => {
      setResponse("Something went wrong.");
      setLoading(false);
    })
  }

  useEffect(() => {
    if(localStorage.getItem("loggedIn")){
      history.push("/dashboard")
    }
    // eslint-disable-next-line
  }, [])

  return (
    <div className="lg:grid-cols-2 grid max-w-screen lg:h-screen overflow-hidden">
      <section className="flex justify-center items-center flex-col gap-2 lg:p-0 p-10">
        <img src={Block} alt="Square" className="w-20" />
        <h3 className="text-3xl font-semibold">Signup</h3>
        {
          response.length > 0 ?
            <div className="bg-gray-400 text-xs shadow rounded p-2">{response}</div>
          : 
            ""
        }
        <form onSubmit={submitForm} className="gap-2 flex flex-col justify-center items-center">
          <input required ref={usernameInput} className="py-2 px-4 shadow rounded outline-none m-1" placeholder="Username" type="text" />
          <input required ref={emailInput} className="py-2 px-4 shadow rounded outline-none m-1" placeholder="Email" type="email" />
          <input required ref={passwordInput} className="py-2 px-4 shadow rounded outline-none m-1" placeholder="Password" type="password" />
          <button type="submit" className="disabled flex px-4 py-2 rounded shadow border w-40 justify-center items-center hover:bg-gray-100 duration-300">
            {
              !loading
              ?
              "Signup"
              :
              <svg xmlns="http://www.w3.org/2000/svg" className="animate-spin h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          </button>
        </form>
      </section>
      <section className="bg-black w-full h-96 lg:h-full flex justify-center items-center">
        <img src={Block} alt="Square" className="w-40" />
      </section>
    </div>
  )
}

export default Login
