// import React from "react";
// import { useNavigate } from "react-router-dom";

// const SignUp = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("/api/auth/signup", { email, password });
//       // Handle success (e.g., redirect to login page)
//       navigate("/")
//     } catch (error) {
//       console.error(error);
//       // Handle error (e.g., display error message)
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//         required
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//         required
//       />
//       <button type="submit">Sign Up</button>
//     </form>
//   );
// };

// export default SignUp;

import React, { useContext, useState } from "react";
import { AuthContext } from "../../security/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";
import './SignUp.css'

const Signup = () => {
  const { signup, error, status } = useContext(AuthContext);
  const [signupData, setSignupData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    role: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "role") {
      setSignupData({ ...signupData, role: [e.target.value] }); // Wrap in array
    } else {
      setSignupData({ ...signupData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {success} = await signup(signupData);
      console.log(success); 
      console.log("Status:", success)
      if (success) {
        navigate("/login");
      }      
    } catch (error) {
      setErrorMessage("Signup failed. Please try again.");
      // console.error("Signup error:", error.message);
    }
  };

  return (
    <div className="form__container">
      <form onSubmit={handleSubmit} className="form__content">
        {error && <p className="error-message">{error}</p>}
        <input
          type="text"
          name="firstname"
          value={signupData.firstname}
          onChange={handleChange}
          placeholder="First Name"
          className="form__input"
          
        />
        <input
          type="text"
          name="lastname"
          value={signupData.lastname}
          onChange={handleChange}
          placeholder="Last Name"
          className="form__input"
        />
        <input
          type="text"
          name="mobile"
          value={signupData.mobile}
          onChange={handleChange}
          placeholder="Mobile"
          className="form__input"
        />
        <input
          type="email"
          name="email"
          value={signupData.email}
          onChange={handleChange}
          placeholder="Email"
          className="form__input"
        />

        <select className="form__select" name="role" value={signupData.role} onChange={handleChange} >
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
          <option value="mod">Content Creator</option>
        </select>
        <button type="submit" >Signup</button>
        <p>
          Already have an account? <NavLink to={"/login"}>Login</NavLink> now
        </p>
      </form>
    </div>
  );
};

export default Signup;
