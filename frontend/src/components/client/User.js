import React, {useEffect} from 'react'
import Divider from '../../assets/ah.svg';
import { checkExists } from '../../resolver/fetch';
import { useHistory } from 'react-router-dom';

function User({username}) {

  const randomBg = [
    "from-blue-400 to-green-500",
    "from-green-400 to-blue-500",
    "from-green-400 to-green-500",
    "from-blue-400 to-blue-500"
  ];

  const history = useHistory();

  useEffect(() => {
    checkExists(username).then(result => {
      if(result["data"]["message"]){
        return
      }else{
        history.push("/404")
      }
    }).catch(err => {
      history.push("/404")
    })
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <section className={`h-96 w-full bg-gradient-to-br ${randomBg[Math.floor(Math.random() * (randomBg.length - 0) + 0)]} flex justify-center items-center relative`}>
        <img src={Divider} alt="Epic" className="absolute bottom-0 w-full select-none" />
        <div className="text-white text-center transform scale-150 z-10 select-none">
          <h3>You're Visiting:</h3>
          <h4 className="text-4xl font-bold">{username}</h4>
        </div>
      </section>
      <section>
        Epic products section
      </section>
    </div>
  )
}

export default User