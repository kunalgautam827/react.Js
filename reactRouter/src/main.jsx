import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { StrictMode  } from "react";
import "./index.css";
import App from "./App.jsx";
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Layout } from "./Layout.jsx";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact.jsx";
import User from './components/user/User';
import Github, { githubInfoLoader } from "./components/github/Github.jsx";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path:"contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route path="" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="user/:id" element={<User/>} />
        <Route 
        loader={githubInfoLoader}  // optimization for load data from github
        path="github" 
        element={<Github/>} 
        />
    </Route>
  )
)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />  {/* this is router*/}
  </StrictMode>,
);
