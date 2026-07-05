import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
function P2() {

// // // it throw an error , bcoz p2 is not wrap inside <UserContextProvider>

//     const {user} = useContext(UserContext)
//   if(!user) return (<div>please login first</div>)
//   return <div>heyy welcome {user.username}</div>

return <div>hellow i'm p2</div>
}

export default P2