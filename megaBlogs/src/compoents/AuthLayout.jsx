import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ childern, authentication = true }) {  // authentication → Whether this page requires login.
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  const [loder, setLoder] = useState(true);

  useEffect(() => {
    if (authentication && authentication !== authStatus) {
      navigate("/login");
    } else if (!authentication && authentication !== authStatus) {
      navigate("/");
    }
    setLoder(false)
  }, [navigate, authStatus, authentication]);
  return loder ? <h1>Loging...</h1> : <>{childern}</>;
}