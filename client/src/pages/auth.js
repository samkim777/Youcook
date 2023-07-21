import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";



export const Auth = () => {
    return <div>
        <Login />
        {/* <Register /> */}
    </div>
}

const Login = () => {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate()
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3001/auth/login", {
                username, password
            })
            // Store user ID to local storage
            window.localStorage.setItem("userID", response.data.userID);
            // Navigate to homepage
            navigate("/")
        } catch (err) {
            console.error(err)
        }
    }
    return <Form username={username} setusername={setusername} password={password} setpassword={setpassword} label="Login" buttonlabel="Login" onSubmit={onSubmit} />
}

const Register = () => {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:3001/auth/register", {
                username, password,
            })
            alert("Registration completed")
        } catch (err) {
            console.error(err)
            alert("User exists")
        }
    }
    return <Form username={username} setusername={setusername} password={password} setpassword={setpassword} label="Register"
        onSubmit={onSubmit} />
}

export const Form = ({ username, setusername, password, setpassword, label, buttonlabel, onSubmit }) => {
    return <div className="auth-container">
        <form onSubmit={onSubmit}>
            <h2 id="auth-label"> {label}</h2>
            <div className="form-group">
                <label className="usertext" htmlFor="username"></label>
                <input placeholder="Username" type="text" id="username" value={username} onChange={(event) => { setusername(event.target.value) }}></input>
            </div>
            <div className="form-group">
                <label htmlFor="password"></label>
                <input placeholder="Password" type="password" id="password" value={password} onChange={(event) => { setpassword(event.target.value) }}></input>
            </div>
            <div className="form-buttons">
                <button id="auth-login" type="submit">{buttonlabel}</button>
                <Link to="/register" id="auth-register"> Register</Link>
            </div>
        </form>
    </div>
}