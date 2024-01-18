import { createContext, useContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

// export const useMyContext = () => useContext(myContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const login = async ({ email, password }) => {
    try {
      const response = await fetch(
        "http://localhost:5000/users?email=" + encodeURIComponent(email)
      );
      const users = await response.json();

      const foundUser = users.find(
        (u) => u.email === email && u.password === password
      );
      if (foundUser) {
        setUser(foundUser);
        setAuthenticated(true);
        <Navigate to={"/"} />;
        // navigate("/");
        return true;
      } else {
        setAuthenticated(false);
        setUser(null);
        return false;
      }
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    }
  };

  const register = async ({ username, email, password }) => {
    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const newUser = await response.json();
      if (response.ok) {
        setUser(newUser);
        setAuthenticated(true);
        // navigate("/");
        <Navigate to={"/"} />;
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Registration failed:", error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setAuthenticated(false);
    // navigate("/login");
    <Navigate to={"/login"} />;
  };

  const value = {
    sidebarCollapsed,
    isAuthenticated,
    user,
    setSidebarCollapsed,
    login,
    logout,
    // register,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
