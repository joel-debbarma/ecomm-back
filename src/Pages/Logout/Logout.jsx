import React, { useEffect } from 'react'
import { useCookies } from "react-cookie";

const Logout = () => {
  const [cookies, setCookie,removeCookie] = useCookies();
  useEffect(
    ()=>{
      if(cookies.token){
        removeCookie('token')
      }
    }
    
  ,[])
  return (
    <div>Logout</div>
  )
}

export default Logout