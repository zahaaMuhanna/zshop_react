import React, { useContext } from 'react'
import { UserContext } from '../context/User.jsx'
import style from './Profile.module.css'
import { Link, Outlet } from 'react-router-dom';
export default function Profile() {
    let {userData,loading} = useContext(UserContext);
      console.log(userData)
    if(loading){
      return <p>loading...</p>
    }
  return (
    <aside className={`${style.profile}`}>
      <div className={`${style.profileLinks}`}>
          <nav>
            <Link to=''>info</Link>
            <Link to='contact'>contact</Link>
          </nav>

      </div>

      <div className={`${style.userData}`}>
        <Outlet />
      </div>  
        
    </aside>
  )
}
