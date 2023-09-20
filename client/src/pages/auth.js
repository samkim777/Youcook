import { useState } from "react";
import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { GoogleSignIn } from "./googleSignIn";

export const Auth = () => {
  return <Login />;
};

export const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://youcook-server.vercel.app/auth/login", {
        username,
        password,
      });
      // Store user ID to local storage
      window.localStorage.setItem("userID", response.data.userID);

      // Navigate to homepage
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <Form
        username={username}
        setusername={setusername}
        password={password}
        setpassword={setpassword}
        label="Login"
        buttonlabel="Login"
        onSubmit={onSubmit}
      />
      <div className="googleLogin">
        Or Sign in using Google
        <GoogleSignIn />
      </div>
    </div>
  );
};

export const Form = ({
  username,
  setusername,
  password,
  setpassword,
  label,
  buttonlabel,
  onSubmit,
}) => {
  return (
    <div className="auth-container">
      <form onSubmit={onSubmit}>
        <h2 id="auth-label"> {label}</h2>
        <div className="form-group">
          <label className="usertext" htmlFor="username"></label>
          <input
            placeholder="Username"
            type="text"
            id="username"
            value={username}
            onChange={(event) => {
              setusername(event.target.value);
            }}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="password"></label>
          <input
            placeholder="Password"
            type="password"
            id="password"
            value={password}
            onChange={(event) => {
              setpassword(event.target.value);
            }}
          ></input>
        </div>
        <div className="form-buttons">
          <button id="auth-login" type="submit">
            {buttonlabel}
          </button>
          <Link to="/register" id="auth-register">
            {" "}
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Auth;
