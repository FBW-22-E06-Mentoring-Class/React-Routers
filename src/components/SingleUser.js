import React from 'react'
import {useLocation} from "react-router-dom"

export default function SingleUser() {
   const location = useLocation()
   console.log(location)
  return (
    <div>
        {location.state && <>
            <h2>{location.state.first_name} {location.state.last_name}</h2>
        <img src={location.state.avatar} width="200" alt="" />
        <p>{location.state.email}</p>
        </> }
        
    </div>
  )
}
