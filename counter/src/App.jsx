import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
const names = ["kunal","kumkum","rashi","ritik","hemant","atul","Ap","rohit","roshan"]

function App() {

  const [counter , setCounter] = useState(10);
  const [name,setName] = useState("")
  function addValue(){
    if(counter < 20) {
      setCounter(counter+1)
      let name = names[Math.floor(Math.random()*names.length)]
      setName(name)
    }

  }
  function removeValue(){
    if(counter > 0) {
      setCounter(counter-1)
      let name = names[Math.floor(Math.random()*names.length)]
      setName(name)
    }
  }

  return (
    <>
    <h1>This is a counter</h1>
    <p>counter : {counter}</p>
    <button onClick={addValue}>add value in {counter}</button>
    <button onClick={removeValue}>remove value from {counter}</button>

    <h1 >hello! my name is {name}</h1>
    </>
  )
}

export default App
