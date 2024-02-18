 import React from 'react'
 import './Navbar.css';
 import { Link } from 'react-router-dom';
 const Navbar = (props) => {

   return (
     <nav className='navbar'>
      <div className='logo'>
       <h1>
      <Link to={'/'}>
        <i className='fab fa-github'/>
        </Link>
        {props.title ? props.title:'GitHub finder'}
       </h1>
</div>
 
     </nav>
   )
 }
 
 export default Navbar