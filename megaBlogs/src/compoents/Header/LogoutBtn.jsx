import React from 'react'
import authService from "../../appwrite/auth"
import { useDispatch } from "react-redux"
import {logout} from "../../store/AuthSlice"


function LogoutBtn() {
  let dispatch = useDispatch();
  const logoutHandler = ()=>{
    authService.logout().then(()=>{
      dispatch(logout())
    })
  }

  return (
    <button onClick={logoutHandler} className='inline-block px-4 py-2 duration-200 bg-blue-400 hover:bg-blue-100 rounded-full'>Logout</button>
  )
}

export default LogoutBtn