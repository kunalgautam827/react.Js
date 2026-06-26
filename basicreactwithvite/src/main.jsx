import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Add from "./practice.jsx"

// const CustomElement = {
//   type : 'a',
//   props : {
//     href : "https://google.com",
//     target : "_blank"
//   },
//   children : "click me"
// }

const name = "kunal"
const anotherElement = (<a href='https://google.com' target='_blank'>click me !! i'm another element</a>)

const CustomElement = React.createElement(
  'a',
  {href:"https://instagram.com",target:"_blank"},
  "react button!! now go to google"
)

createRoot(document.getElementById('root')).render(
  
  // <App />

    // <CustomElement/>
  
    // anotherElement 

    // CustomElement
    <Add />
)
