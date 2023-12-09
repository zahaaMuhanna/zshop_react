import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Auth({children}) {
    const navigate = useNavigate();
    if(localStorage.getItem("userToken") != null){
        return <Navigate to='/home'/>
    }
    return navigate(-1);

}
