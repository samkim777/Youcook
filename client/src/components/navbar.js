import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [login, setLogin] = useState();
  const navigate = useNavigate();

  const logout = () => {
    window.localStorage.removeItem("userID");
    navigate("/auth");
  };

  useEffect(() => {
    const isLoggedin = window.localStorage.getItem("userID");
    if (isLoggedin) {
      console.log(isLoggedin);
      setLogin(<Link className={"link-styles"} to="/auth" onClick={logout}>
        Logout
      </Link>)
    } else {
      setLogin(<Link className={"link-styles"} to="/auth">
        Login
      </Link>)
    }
  },[window.localStorage.getItem("userID")])

  return (
    <div className="navbar">
      <Link className={"link-styles"} to="/">
        Home
      </Link>
      {login}
      <Link className={"link-styles"} to="/saved">
        Saved Videos
      </Link>
    </div>
  );
};
