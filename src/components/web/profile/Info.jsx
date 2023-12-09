import React, { useContext } from 'react'
import { UserContext } from '../context/User.jsx';

export default function Info() {
    let {userData,loading} = useContext(UserContext);
    if(loading){
        return <p>loading...</p>
    }
  return (
     <div>
        <h2>{userData.userName}</h2>
        <h2>{userData.status}</h2>
      </div>
  )
}
