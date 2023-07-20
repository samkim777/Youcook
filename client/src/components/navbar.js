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
            <Link style={{textDecoration: 'none'}} to="/">Home</Link>
            <Link style={{textDecoration: 'none'}} to="/auth">Login</Link>
            <Link style={{textDecoration: 'none'}} to="/saved">Saved Videos</Link>
        </div>
    );
};