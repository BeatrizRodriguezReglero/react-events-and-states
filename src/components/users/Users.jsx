import { useState } from "react";
import { USERS } from "../../constants/users";


const Users = ()=>{
    const[user,setUser]=useState(0)
    return(
        
        <>
            <h1>Slide Users</h1>
            <img src={USERS[user].profileImage} alt="" />
            <h2>Name: {USERS[user].name} </h2>
            <p>Username: {USERS[user].username}</p>
            <p>Email: {USERS[user].email}</p>
            <button disabled = {user===0} onClick={()=>previousUser(user, setUser)}>Previous</button>
            <button disabled = {user===USERS.length-1} onClick={()=>nextUser(user, setUser)}>Next</button>
        </>
    )
}

const previousUser = (user,setUser)=>{
    setUser(user - 1)
    console.log(user)
   
}

const nextUser = (user,setUser)=>{
    setUser(user + 1)
    console.log(user)
    
}
export default Users;