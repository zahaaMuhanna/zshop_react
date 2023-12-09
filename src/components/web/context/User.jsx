import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let UserContext=createContext();

export default function UserContextProvider({children}){
    const [userToken,setUserToken]=useState(null);
    const [userData,setUserDate]=useState(null);
    const [loading,setLoading] = useState(true);
    
    const getUserDate=async()=>{
        if(userToken){
            const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/user/profile`,
            {headers : {authorization:`Tariq__${userToken}`}})
            setUserDate(data.user)
            setLoading(false)
        }
    }

    useEffect( ()=>{
        getUserDate();
    },[userToken])
    return <UserContext.Provider value={{userToken , setUserToken,userData,setUserDate,loading}}>
        {children}
    </UserContext.Provider>
}
