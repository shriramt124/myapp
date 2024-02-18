 import Navbar from "./Components/Navbar/Navbar";
import Useritem from "./Components/User/Useritem";
import DisplayAllUser from "./Components/DisplayallUser/DisplayAllUser";
import CustomRoutes from "./routes/CustomRoutes";
import { useEffect, useState } from "react";
import './App.css';
import Search from "./Components/Search/Search";
import UserDetails from "./Components/UserDetails/UserDetails";
 
function App() {
  const [searchTerm,setSearchTerm]  = useState('');
    
  return (
    <div className="wrapper">
    <Navbar />
    <Search updateSearchTerm= {setSearchTerm}/>
   
    {(!searchTerm) ?  <CustomRoutes />:<UserDetails key={searchTerm}  usename={searchTerm}/>}
     
       
    </div>
  );
}

export default App;
