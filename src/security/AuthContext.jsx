import React, { createContext, useContext, useEffect, useState } from "react";
import apiClient from "../components/api/ApiClient";
// import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  // const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      setError("");
      // setStatus("");

      const response = await apiClient.post("api/auth/signin", {
        email,
        password,
      });
      if (response.status === 200 && response.data.token) {
        localStorage.setItem("token", response.data.token);
        setAuthenticated(true);
        setUser(response.data);
        setError("");
        console.log("Login successful");
        console.log("User ", response.data);
        // setStatus("200");
        // navigate("/");
        return { success: true };
      }
    } catch (error) {
      setError("Login failed. Please check your credentials and try again.");
      return { success: false };
    }
  };

  const signup = async (signupData) => {
    try {
      setError("");
      // setStatus("");
      const response = await apiClient.post("api/auth/signup", signupData);

      if (response.status === 200) {
        // setStatus("200");
        console.log("User signed up check emails for password");
        return { success: true };
      }
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data.message
        : error.message;
      setError(errorMessage);
      return { success: false };
    }
  };

  const logout = () => {
    setAuthenticated(false);
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  // Include error in the context value
  const value = { isAuthenticated, user, login, logout, signup, setSidebarCollapsed, sidebarCollapsed, error, status };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthProvider;
