import React from "react";
import { useSelector } from "react-redux";
import { Logo, LogoutBtn, Container } from "../index";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  let authStatus = useSelector((state) => state.auth.status);
  let navigate = useNavigate();
  let navItems = [
    {
      name: "Home",
      active: true,
      slug: "/",
    },
    {
      name: "Login",
      active: !authStatus,
      slug: "/login",
    },
    {
      name: "Signup",
      active: !authStatus,
      slug: "/signup",
    },
    {
      name: "All Posts",
      active: authStatus,
      slug: "/all-posts",
    },
    {
      name: "Add Posts",
      active: authStatus,
      slug: "/add-posts",
    },
  ];
  return (
    <header className="py-3 shadow bg-gray-400">
      <Container>
        <nav className="flex">
          <div className="m-4">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button 
                  className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full" 
                  onClick={()=>navigate(item.slug)}>
                    {item.name}
                  </button>
                </li>
              ) : null,
            )}
            {
              authStatus && (
                <li> <LogoutBtn /></li>
              )
            }
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
