import { useState } from "react";
import { USERS } from "../../constants/users";
import { StyledButton, StyledText, StyledUsers } from "./users.styles";


const Users = ()=>{
    const[user,setUser]=useState(0)
    return(
        
        <>
        <StyledUsers>
       
            <h1>Slide Users</h1>
            <img src={USERS[user].profileImage} alt="" />
            <h2>Name: {USERS[user].name} </h2>
            <StyledText>Username: {USERS[user].username}</StyledText>
            <StyledText>Email: {USERS[user].email}</StyledText>
            <StyledButton disabled = {user===0} onClick={()=>previousUser(user, setUser)}>Previous</StyledButton>
            <StyledButton disabled = {user===USERS.length-1} onClick={()=>nextUser(user, setUser)}>Next</StyledButton>

        </StyledUsers>
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