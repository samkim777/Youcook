import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



export const Auth = () => {
    return <div>
        <Login />
        <Register />
    </div>
}

const Login = () => {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    // const [_, setCookies] = useCookies(["access_token"])
    const navigate = useNavigate()
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3001/auth/login", {
                username, password
            })
            // setCookies("access_token", response.data.token);
            // Store user ID to local storage
            window.localStorage.setItem("userID", response.data.userID);
            // Navigate to homepage
            navigate("/")
        } catch (err) {
            console.error(err)
        }
    }
    return <Form username={username} setusername={setusername} password={password} setpassword={setpassword} label="Login" onSubmit={onSubmit} />
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
        }
    }
    return <Form username={username} setusername={setusername} password={password} setpassword={setpassword} label="Register"
        onSubmit={onSubmit} />
}

const Form = ({ username, setusername, password, setpassword, label, onSubmit }) => {
    return <div className="auth-container">
        <form onSubmit={onSubmit}>
            <h2> {label}</h2>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={username} onChange={(event) => { setusername(event.target.value) }}></input>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={(event) => { setpassword(event.target.value) }}></input>
            </div>
            <button type="submit">{label}</button>
        </form>
    </div>
}