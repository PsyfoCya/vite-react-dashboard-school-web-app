// import React, { useState } from "react";
// import "./Login.css";
// import { FcGoogle } from "react-icons/fc";
// import { FaFacebook } from "react-icons/fa";
// import { FaTiktok } from "react-icons/fa";
// import { useAuth } from "../../security/AuthContext";
// import {useNavigate} from 'react-router-dom'

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const { login, logout } = useAuth();

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await login(email, password);
//       navigate("/")
//     } catch (error) {
//       console.error("Error during login:", error)
//     }
//   };

//   const handleSignOut = () => {
//     logout();
//   };

//   return (
//     <div className="login-form__container">
//       {/* <button onClick={handleSignOut}>Sign Out</button> */}
//       <form className="form" onSubmit={handleSubmit}>
//         <div className="title">
//           Welcome,
//           <br />
//           <span>sign in to continue</span>
//         </div>
//         <input
//           className="input"
//           name="email"
//           placeholder="Email"
//           type="email"
//           value={email}
//           onChange={handleEmailChange}
//         />
//         <input
//           className="input"
//           name="password"
//           placeholder="Password"
//           type="password"
//           value={password}
//           onChange={handlePasswordChange}
//         />
//         <div className="login-with">
//           <div className="button-log">
//             <FcGoogle className="icon" />
//           </div>
//           <div className="button-log">
//             <FaFacebook className="icon" />
//           </div>
//           <div className="button-log">
//             <FaTiktok className="icon" />
//           </div>
//         </div>
//         <div>
//           <p>haven't signed up yet?</p>
//         </div>
//         <button className="button-confirm" type="submit">
//           Let's go →
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;

import React, { useContext, useState } from "react";
import { AuthContext } from "../../security/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css"

const Login = () => {
  const { login, error, status } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post('http://localhost:5000/api/auth/signin', credentials);
      const { success } = await login(credentials.email, credentials.password);
      console.log("Status:", success);
      if (success) {
        navigate("/");
      }
    } catch (error) {
      setErrorMessage("Login failed. Please try again.");
      // Handle login errors or show error messages
    }
  };

  return (
    <div className="login-form__container">
      <form onSubmit={handleSubmit} className="login-form__content">
        {error && <p className="error-message">{error}</p>}
        <input
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
          placeholder="Email"
          className="login-form__input"
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          placeholder="Password"
          className="login-form__input"
        />
        <button type="submit" className="login-form__button">Login</button>
        <div>
          <p>
            Don't have an account yet? <NavLink to={"/signup"}>Signup</NavLink> now
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
