import React from "react";
import { NavLink } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1>Unauthorized</h1>
        <h2>Login</h2>
        <NavLink to={"/login"}>
          <p>Login now</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Unauthorized;
