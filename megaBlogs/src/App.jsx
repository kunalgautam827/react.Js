import { useEffect, useState } from "react";
import "./App.css";
import { store } from "./store/store";
import { login, logout } from "./store/AuthSlice";
import authService from "./appwrite/auth";
import { useDispatch } from "react-redux";
import { Header, Footer } from "./compoents/index";
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({userData}));
        } else {
          dispatch(logout());
        }
      })
      .finally(()=>setLoading(false));
  }, []);

  return !loading ? 
  (<div className="min-h-screen bg-gray-400 flex flex-wrap content-between text-red-600">
  <div className="w-full block bg-gray-400">
  <Header />
  Todo : <Outlet />
  <Footer />
  </div>
  </div>) : null;
}

export default App;
