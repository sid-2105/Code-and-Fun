import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user} = useContext(UserContext)

    if(!user) return <p>Please login  </p>    
  return (
    <div>
        <h2>Profile</h2>
        <p>Welcome {user.username}</p>
    </div>
  )
}

export default Profile