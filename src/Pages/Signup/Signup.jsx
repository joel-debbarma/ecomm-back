import React,{useState} from 'react'
import  Axios  from 'axios';

const Signup = () => {
  const [formData,setFormData] =useState({name:"",email:"", password:"",role:""});
  const [errorMessage,setErrorMessage] =useState("");
  const [success,setSuccess] =useState("");
  const axiosPost= async()=>{ 
    let data= {
        name:formData.name,
        email:formData.email,
        password:formData.password,
        role:formData.role
    }
        const response = await  Axios.post(process.env.REACT_APP_BACK_END_URL+'signup',data).then(res=>{
            console.log(res)
            if(res.data.errorMessage){
              setErrorMessage(res.data.errorMessage)
              setSuccess("");
            }
            if(res.data.success){
              setSuccess("User saved");
            setErrorMessage("")}
            // console.log(res.data.user)
      
        })
       
        // console.log(cookies);
        
       
   
}
  const onsubmitHandler=(e)=>{
    e.preventDefault()
    axiosPost()
}
  return (
    <div>
        Sign up Page
        <form onSubmit={onsubmitHandler}>
            {/* Name */}
            <label htmlFor="name">Enter Name:</label>
            <input name="name" type='text'
            onChange={(e)=>{const {value} = e.target
            setFormData({...formData,name:value})}}/>
            {/* Email */}
            <label htmlFor="email">Enter Email:</label>
            <input name="email" type='text'
             onChange={(e)=>{const {value} = e.target
             setFormData({...formData,email:value})}}/>
            {/* Password */}
            <label htmlFor="password">Enter Password:</label>
            <input name="password" type='password'
             onChange={(e)=>{const {value} = e.target
             setFormData({...formData,password:value})}}/>
            {/* role */}
            <label htmlFor="role">Enter Role:</label>
            <input name="role" type='text'
             onChange={(e)=>{const {value} = e.target
             setFormData({...formData,role:value})}}/>
             <button>Submit</button>
        </form>
        <div>
            {formData.name}||{formData.email}||{formData.password}||{formData.role}<br/>
            {errorMessage}||{success}
        </div>
    </div>
  )
}

export default Signup