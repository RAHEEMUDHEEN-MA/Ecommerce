import React, { useEffect, useState } from 'react'
import  axios  from "axios";
import UserTile from '../components/UserTile';

const Users = () => {

    const [users, setusers] = useState([])
    console.log(users);
    useEffect(() => {
      axios.get("https://api.escuelajs.co/api/v1/users").then((response)=>{setusers(response.data)}).catch((err)=>{console.log(err);})    
    }, [])
    
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
  {users.map((user) => (
    <UserTile
      key={user.id} // Assuming each user has a unique identifier like id
      name={user.name}
      email={user.email}
      avatar={user.avatar} // Assuming it's "avatar" instead of "avathar"
      style={{ flex: "0 0 calc(25% - 10px)", margin: "5px" }}
    />
  ))}
</div>

  )
}

export default Users
