import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  // const data = useLoaderData();
  const [us,setUs] = useState("")

    const [data, setData] = useState({});
    useEffect(() => {
      fetch(`https://api.github.com/users/${us}`)
        .then((response) => response.json())
        .then((response) => setData(response));
    }, [us]);

  return (
    <>
      <div className="flex bg-gray-900">
        <div>
          <img className="h-full object-fill" src={data.avatar_url} alt="" />
        </div>
        <div className="bg-gray-900 h-[60vh] w-full flex items-center justify-center text-2xl md:text-4xl lg:text-6xl text-center wrap-break-word px-4">
          <ul>
            <li>
              <label htmlFor="userName">enter username</label>
              <input onChange={(e)=> setUs(e.target.value)} id="userName" className="bg-amber-100" type="text" />
            </li>
            <li>userName : {data.login}</li>
            <li>public_repos : {data.public_repos}</li>
            <li className="underline text-blue-800">
              <a target="_blank" href={`https://github.com/${us}`}>
                view profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Github;

// loader function
// export const githubInfoLoader = async () => {
    
//   const res = await fetch("https://api.github.com/users/kunalgautam827");
//   return res.json();
// };
