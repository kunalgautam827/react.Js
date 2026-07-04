import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const {id} = useParams()
    console.log(typeof Number(id));
    
  return (
    <div className='bg-blue-200 h-[50vh] flex items-center justify-center text-[150px] '>User : {id}</div>
  )
}
