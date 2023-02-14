import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserList.css'

const UserList = () => {
    const [user, setUser] = useState([]);

    const getDataUsers = async ()=>{

      try {
       const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
       setUser(data)}

       catch (error) {
        console.log(error)}}

    useEffect(() => {getDataUsers()},[])

    return (
        <div className='list'>
            <h2 className='userslist'> The Users List </h2>
            {user.map(user => (
              <div className='user'>
                <p key={user.id}> Name : {user.name}</p>
                <h4> The User Name is {user.name}</h4>
              </div>))}
        </div>)}
        
export default UserList