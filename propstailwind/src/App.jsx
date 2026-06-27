import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import  Card  from './component/card';


function App() {
  const user = {
    name : "kunal",
    username : "kunalgautam827",
    age : 21,
  }

  return (
    <>
      <Card name="kunal" username="kunalgautam827" age={21} />
      <Card name="whynot" username="yesji" age={25} />
    </>
  );
}

export default App;
