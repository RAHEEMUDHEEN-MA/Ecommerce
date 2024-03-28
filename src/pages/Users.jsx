import React, { useEffect, useState } from 'react'
import  axios  from "axios";
import UserTile from '../components/UserTile';

const Users = () => {

    const [users, setusers] = useState([])
   
    useEffect(() => {
      axios.get("https://api.escuelajs.co/api/v1/users").then((response)=>{setusers(response.data)}).catch((err)=>{console.log(err);})    
    }, [])
    
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
  {users.map((user) => (
    <UserTile
      key={user.id} 
      name={user.name}
      email={user.email}
      avatar={user.avatar} 
      style={{ flex: "0 0 calc(25% - 10px)", margin: "5px" }}
    />
  ))}
</div>

  )
}

export default Users
