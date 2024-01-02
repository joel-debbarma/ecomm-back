import React, { useState,useEffect } from 'react'
import { useCookies } from "react-cookie";

const Dashboard = () => {
    const [cookies, setCookie] = useCookies();
    const [userData,setUserData] =useState({name:"",email:"",role:""});
    useEffect(()=>{
        if(cookies.token){
            setUserData({...userData,
                name:cookies.token.user.name
                ,email:cookies.token.user.email,
                role:cookies.token.user.role
            })
        }
    },[]);
  return (
    <div>Dashboard<br/>
        {userData?userData.name:"error"}<br/>
        {userData?userData.email:"error"}<br/>
        {userData?userData.role:"error"}


    </div>
    
  )
}

export default Dashboard