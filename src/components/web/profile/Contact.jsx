import React, { useContext } from 'react'
import { UserContext } from '../context/User.jsx'

export default function Contact() {
    let {userData,loading} = useContext(UserContext);
    if(loading){
        return <p>loading...</p>
    }
  return (
    <div>
        <h2>{userData.email}</h2>
        <h2>{userData.createdAt}</h2>
      </div>
  )
}
