import React from 'react'
import { useCookies } from "react-cookie";
import { NavLink } from 'react-router-dom';
const Header = () => {
  const [cookies, setCookie] = useCookies();
  return (
    <div className='HeaderContainer'>
      
      <NavLink to="/" className={({isActive}) =>`${isActive?'color:red':'color:black'}hover:red ` }>
        Home
      </NavLink>
      <NavLink to="/about" className={({isActive}) =>`${isActive?'color:red':'color:black'}hover:red ` }>
        About
      </NavLink>

      {cookies.token?<><NavLink to="/logout" className={({isActive}) =>`${isActive?'color:red':'color:black'}hover:red ` }>
        Logout
      </NavLink>|
      <NavLink to="/dashboard" className={({isActive}) =>`${isActive?'color:red':'color:black'}hover:red ` }>Dashboard</NavLink></> :<span><NavLink to="/signup" className={({isActive}) =>`${isActive?'color:red':'color:black'}hover:red ` }>
        Signup
      </NavLink>|<NavLink to="/login" className={({isActive}) =>`${isActive?'color:red':'color:black'}hover:red ` }>
        Login
      </NavLink></span>}

    </div>
  )
}

export default Header