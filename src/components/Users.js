import React,{useState,useEffect} from 'react'
import {Link, Outlet} from "react-router-dom"

export default function Users() {
  const [users,setUsers]= useState([])

  console.log(users)
  useEffect(()=>{
    fetch("https://reqres.in/api/users?page=2")
    .then(res=>res.json())
    .then(result=> setUsers(result.data))
  },[])

  return (
    <div><h1>Users Page</h1>
 
   
    <div>
      {users.map(user=>{
        return (<h3><Link to={`/users/${user.first_name}`} state={user}> {user.first_name}</Link></h3>)
      })}
    </div>
    <Outlet/>
    </div>
  )
}
