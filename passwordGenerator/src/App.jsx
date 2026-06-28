import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [password,setPassword] = useState("")
  const [length , setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)

  const [copied , setCopied] = useState(false)

  const passwordRef = useRef(null);
  const btnRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    setCopied(false)
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%&*"

    for(let i = 1 ; i < length ; i++){
      let char = Math.floor(Math.random() * str.length );
    pass += str.charAt(char)
    }
    setPassword(pass)

  }, [setPassword,length,numberAllowed,charAllowed] );


  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,length)
    window.navigator.clipboard.writeText(password);

    setCopied(true)    

  },[password])


  useEffect(()=>{
    passwordGenerator();
  },[setPassword,length,numberAllowed,charAllowed]);

  return (
    <>
    <div className='flex justify-center items-center'>
    <div className='bg-gray-600 w-[50vw] h-full rounded text-white'>
    <div>password generator</div>
    <div className='flex rounded-2xl overflow-hidden m-5'>
      <input className='bg-white w-[70%] p-3 outline-none text-black cursor-pointer' 
      type="text" 
      value={password} 
      placeholder='password' 
      readOnly
        ref={passwordRef}
      />
      <button ref={btnRef} onClick={copyPasswordToClipBoard} className='bg-blue-500 p-3 w-[30%] hover:bg-blue-700 '>{copied?"copied":"copy"}</button>
    </div>
{/*  */}

    <div className='flex justify-evenly items-center'>
  
       <div className='flex items-center gap-2 '>
         <input type="range" className='cursor-pointer' value={length} min={6} max={50} 
          onChange={(e)=>{setLength(e.target.value)}}
         />
         <label>Length: {length}</label>
       </div>

       <div className='flex items-center gap-2'>
         <input type="checkbox" id='number' className='cursor-pointer'
          onChange={()=>{setNumberAllowed((is)=>{return !is})}}
         />
         <label htmlFor="number" className='cursor-pointer'>Number</label>
       </div>

       <div className='flex items-center gap-2'>
         <input type="checkbox" id="character" className='cursor-pointer'
          onChange={()=>{setCharAllowed((is)=>{return !is})}}
         />
         <label htmlFor="character" className='cursor-pointer'>Character</label>
       </div>
    </div>
<span></span>
    </div>
    </div>
    </>
  )
}

export default App
