import React,{useState}  from 'react'
import  Axios  from 'axios';
import { useCookies } from "react-cookie";

const Login = () => {
    
    const [cookies, setCookie] = useCookies();
    const [formData,setFormData] =useState({email:"", password:""});

    const axiosPost= async()=>{ 
        let data= {
            email:formData.email,
            password:formData.password,
        }
            const response = await  Axios.post(process.env.REACT_APP_BACK_END_URL+'login',data).then(res=>{
                console.log(res)
                console.log(res.data.user)
                setCookie("token",res.data);
            })
           
            // console.log(cookies);
            
           
       
    }

    const onsubmitHandler=(e)=>{
        e.preventDefault()
        axiosPost()
    }

  return (
    <div>
        Login Page
        <form onSubmit={onsubmitHandler}>
            <label>Email:</label><input name='email' type='text' onChange={(e)=>{const {value} = e.target
            setFormData({...formData,email:value})}}/>
            <label>Password:</label><input name='password' type='password' onChange={(e)=>{const {value} = e.target
            setFormData({...formData,password:value})}}/>
            <button>Submit</button>
        </form>
        <div>
            {formData.password}||{formData.email}||{cookies.token?cookies.token.user.name:""}
        </div>
    </div>
  )
}

export default Login

