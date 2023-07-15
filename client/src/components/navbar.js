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
            <Link to="/">Home</Link>
            <Link to="/auth">Login</Link>
            <Link to="/saved">Saved Videos</Link>
        </div>
    );
};