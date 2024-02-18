import React from 'react'
import { Routes,Route } from 'react-router-dom'
import UserDetails from '../Components/UserDetails/UserDetails'
import DisplayAllUser from '../Components/DisplayallUser/DisplayAllUser'
const CustomRoutes = () => {
  return (
    <Routes>
       
    <Route path='/' element={<DisplayAllUser />}/>
    <Route path='users/:username' element={<UserDetails />}/>
    </Routes>
  )
}

export default CustomRoutes