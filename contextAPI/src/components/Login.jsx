import React, { useContext, useState } from "react";
import UserContext from "./../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);
  const onUserSubmit = (e) => {
    e.preventDefault();
    setUser({username})
  };
  return (
    <>
      <label htmlFor="username"></label>
      <input
        id="username"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
      />
      <label htmlFor="password"></label>
      <input id="password"
      placeholder="password"
      value={password}
      onChange={(e)=> setPassword(e.target.value)}
       type="text" />
      <button onClick={onUserSubmit}>submit</button>
    </>
  );
}

export default Login;
