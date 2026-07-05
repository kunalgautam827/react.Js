import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
function Profile() {
    const {user} = useContext(UserContext)
  if(!user) return (<div>please login first</div>)
  return <div>heyy welcome {user.username}</div>
}

export default Profile