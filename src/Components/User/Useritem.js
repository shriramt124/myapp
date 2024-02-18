import React from 'react'
import './Useritem.css';
 import { Link } from 'react-router-dom';
function Useritem({username,profile_url,image_url}) {
  return (
    <div className='user-info-wrapper'>
        <img src={image_url} alt='imag'/>
        <h3>{username}</h3>
       
        <button>
        <Link to={`users/${username}`} > 
          More
          </Link>
          </button>
         
       
    </div>
  )
}

export default Useritem;