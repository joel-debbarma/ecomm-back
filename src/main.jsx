import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route,RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { CookiesProvider } from "react-cookie";
import './index.css'
import Layout from './Layout'
import { Home } from './Pages/Home/Home'
import About from './Pages/About/About'
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import Logout from './Pages/Logout/Logout';
import Dashboard from './Pages/Dashboard/Dashboard';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/about' element={<About/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/logout' element={<Logout/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CookiesProvider>
      <RouterProvider router={router}/>
    </CookiesProvider>
  </React.StrictMode>,
)
