import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    window.localStorage.clear();
    navigate("/auth");
  };
  return (
    <div className="navbar">
      <Link className={"link-styles"} to="/">
        Home
      </Link>
      <Link className={"link-styles"} to="/auth">
        Login
      </Link>
      <Link className={"link-styles"} to="/saved">
        Saved Videos
      </Link>
    </div>
  );
};
