import React from 'react'
import './Useritem.css';
function Useritem({username,profile_url,image_url}) {
  return (
    <div className='user-info-wrapper'>
        <img src={image_url} alt='imag'/>
        <h3>{username}</h3>
        <button>More</button>
    </div>
  )
}

export default Useritem;