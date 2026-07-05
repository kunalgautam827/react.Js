import { useState } from "react";
import UserContextProvider from "./context/UserContextProvider";
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import P2 from "./components/P2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider>
      <P2 /> {/* can not access global states in context */}
    </>
  );
}

export default App;
