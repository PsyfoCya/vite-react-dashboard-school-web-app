import React, { useState } from "react";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { useAuth } from "../../security/AuthContext";
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login, logout } = useAuth();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);
      navigate("/")
    } catch (error) {
      console.error("Error during login:", error)
    }
  };

  const handleSignOut = () => {
    logout();
  };

  return (
    <div className="login-form__container">
      {/* <button onClick={handleSignOut}>Sign Out</button> */}
      <form className="form" onSubmit={handleSubmit}>
        <div className="title">
          Welcome,
          <br />
          <span>sign in to continue</span>
        </div>
        <input
          className="input"
          name="email"
          placeholder="Email"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          className="input"
          name="password"
          placeholder="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <div className="login-with">
          <div className="button-log">
            <FcGoogle className="icon" />
          </div>
          <div className="button-log">
            <FaFacebook className="icon" />
          </div>
          <div className="button-log">
            <FaTiktok className="icon" />
          </div>
        </div>
        <button className="button-confirm" type="submit">
          Let's go →
        </button>
      </form>
    </div>
  );
};

export default Login;
