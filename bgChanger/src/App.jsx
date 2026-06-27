import { useState } from "react";

import "./App.css";

function App() {
  const [colore, setColore] = useState("pink");
  return (
    <>
      <div className="h-screen w-full flex justify-center" style={{backgroundColor:colore}}>
      <div
      style={{backgroundColor:"#22bfb8"}}
        className="flex justify-evenly items-center h-20 w-250 rounded-2xl absolute bottom-2"
      >
        <div style={{backgroundColor:"green"}} onClick={()=>{setColore("green")}} className="h-10 w-20 rounded-2xl flex justify-center items-center text-black">
          green
        </div>
        <div style={{backgroundColor:"yellow"}} onClick={()=>{setColore("yellow")}} className="h-10 w-20 rounded-2xl flex justify-center items-center text-black">
          yellow
        </div>
        <div style={{backgroundColor:"blue"}} onClick={()=>{setColore("blue")}} className="h-10 w-20 rounded-2xl flex justify-center items-center text-black">
          blue
        </div>
        <div style={{backgroundColor:"black"}} onClick={()=>{setColore("black")}} className="h-10 w-20 rounded-2xl flex justify-center items-center text-white">
          black
        </div>
        <div style={{backgroundColor:"white"}} onClick={()=>{setColore("white")}} className="h-10 w-20 rounded-2xl flex justify-center items-center text-black">
          white
        </div>
        <div style={{backgroundColor:"pink"}} onClick={()=>{setColore("pink")}} className="h-10 w-20 rounded-2xl flex justify-center items-center text-black">
          pink
        </div>
        <div style={{backgroundColor:"violet"}} onClick={()=>{setColore("violet")}} className="h-10 w-20 rounded-2xl flex justify-center items-center text-black">
          violet
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
