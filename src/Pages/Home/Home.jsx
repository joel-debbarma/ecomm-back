import React,{useEffect} from 'react'
import Axios from 'axios';

export const Home = () => {

    const [homeData, setHomeData]= React.useState("");

useEffect(()=>{
    const fetchDetails = async ()=>{
        const response = await fetch(process.env.REACT_APP_BACK_END_URL)
        .then((response)=>response.json())
        .then(data=>{
            console.log(data.greeting)
            // console.log(process.env)
            setHomeData(data.greeting);
        })
    }
      fetchDetails();
    },[]);

  return (
    <div>Home
        {homeData}
    </div>
  )
}
      