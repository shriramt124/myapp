 import React from 'react'
 import './Navbar.css';
 const Navbar = (props) => {

   return (
     <div className='navbar'>
       <h1>
        <i className='fab fa-github'/>
        {props.title ? props.title:'GitHub finder'}
       </h1>
     </div>
   )
 }
 
 export default Navbar