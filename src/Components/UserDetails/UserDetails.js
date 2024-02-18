import React, { useEffect } from 'react'
import axios from 'axios';
import { useParams, Link } from 'react-router-dom'
 import { useState } from 'react';
 import './UserDetails.css';
  function UserDetails({usename}) {
 
   let {username}  = useParams();
   const [details,setDetails] = useState({});
   let apiUrl = '';
   if(usename){
    apiUrl = `https://api.github.com/users/${usename}`;
   }else{
    apiUrl = `https://api.github.com/users/${username}`;
   }
   async function downloadUsers(){
    try{
      const response = await axios.get(apiUrl);
      const userdata = response.data;
      console.log(userdata);
       setDetails({
        image_url:userdata.avatar_url,
         git_url:userdata.html_url,
         username:userdata.name,
         followers:userdata.followers,
         following:userdata.following
       })
   }catch(error){
    console.log(error);
  }
  }

   useEffect(()=>{
    downloadUsers();
   },[]);
  
  return (
    <div className='userdetails-wrapper'>
      <div className='card-wrapper'> 
      <div className='image-wrapper'>
        <img src={details.image_url} alt='user image'/>
      </div>
      
      <div className='text-wrapper'>

      <h2 className='username'>{details.username}</h2>  
      <div className='follow-wrapper'> 
      <h3 className='followers'>followers : {details.followers}</h3>
      <h3 className='following'>follwing : {details.following}</h3>
      <h3 className='git-url'>
        <Link to={details.git_url} >
        {details.git_url}
        </Link>
        </h3>
        
      </div>
      </div>
      </div>


    </div>
  )
}

export default UserDetails