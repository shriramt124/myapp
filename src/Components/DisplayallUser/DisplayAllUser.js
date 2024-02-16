import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Useritem from '../User/Useritem';
import './DisplayAllUser.css';
const DisplayAllUser = () => {
    let [users,setUsers] = useState([]);
    let [isLoading,setisLoading] = useState(false);

    async function downloadUsers() {
        setisLoading(true);
        const apiUrl = "https://api.github.com/users";
        const response = await axios.get(apiUrl);
        const data =await  response.data;
        let user = data.map((d) => {
            return {
                id: d.id,
                username: d.login,
                image_url: d.avatar_url,
                profile_url: d.html_url
            }
        })
        setUsers(user);
        setisLoading(false);
    }
    useEffect(() => {
        downloadUsers();
    },[]);//to tell that only single time load
    return (
        <div className='users-wrapper'>
            
            {  isLoading ? "Loading ... ":
             users.map((user)=> <Useritem key={user.id} username={user.username}
              image_url={user.image_url} profile_url={user.profile_url}/>)
            
            }
        </div>
    )
}

export default DisplayAllUser