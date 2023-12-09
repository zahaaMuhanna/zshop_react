import React, { useContext, useEffect } from 'react'
import {  RouterProvider, } from 'react-router-dom'
import  { CartContext, CartContextProvider } from './components/web/context/Cart.jsx';
import UserContextProvider, { UserContext } from './components/web/context/User.jsx';
import {router} from './layouts/router.jsx'

export default function App() {

  let {setUserToken} = useContext(UserContext);
  let {count,setCount,getCartContext} = useContext(CartContext)
  useEffect( ()=>{
    if(localStorage.getItem("userToken") != null){
      setUserToken(localStorage.getItem("userToken"));
    }
    setCount(getCartContext().count)
  },[])

  return (
          <RouterProvider router={router} />
  )
}

