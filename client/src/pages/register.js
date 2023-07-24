import { Form } from "./auth";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

export const Registration = () => {
    return (
        <Register />
    )
}



const Register = () => {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate();
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:3001/auth/register", {
                username, password,
            })
            alert("Registration completed")
            navigate("/auth");
        } catch (err) {
            console.error(err)
            alert("User exists")
        }
    }
    return <Form username={username} setusername={setusername} password={password} setpassword={setpassword} label="Register" buttonlabel="Create Account"
        onSubmit={onSubmit} />
}

export default Registration