import { createContext, useContext, useEffect, useState } from "react";
// import { executeJwtAuthenticationService } from "../components/api/AuthenticationApiService";
import { apiClient } from "../components/api/ApiClient";

// const navigate = useNavigate();

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

// export const useMyContext = () => useContext(myContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(true);
  const [user, setUser] = useState(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));

  const setTokenFunc = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  };


  const login = async (email, password) => {
    window.alert("recieved " + email + " and " + password);
    console.log("when do we get the token?");
    console.log(token);
    try {
      console.log("in try block");
      const response = await apiClient.post("api/auth/signin", {
        email,
        password,
      });

      // window.alert("awaiting success messege??????");

      // const { data } = response;
      // setToken(data.token);

      // console.log("Token:", data.token);

      if (response.status == 200) {
        const jwtToken = response.data.token;
        setAuthenticated(true);
        // setUser(email);
        setToken(jwtToken);
        setTokenFunc(jwtToken)
        console.log(jwtToken);
        console.log(token);
        console.log(localStorage.getItem("token"))
        console.log("who's the user? " + response.data);
        apiClient.interceptors.request.use((config) => {
          console.log("intercepting and adding a token");
          // console.log(jwtToken);
          config.headers.Authorization = jwtToken;
          return config;
        });

        return true;
      } else {
        logout();
        return false;
      }
    } catch (error) {
      logout();
      return false;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          // If you don't have an explicit validation endpoint, you can skip this part
          // This is just an example of how you might validate the token on the server
          // Replace the URL with the actual endpoint or remove this part if not needed
          const response = await apiClient.post("/api/auth/validateToken", {
            token,
          });

          // Do additional logic if needed based on the response
        }
      } catch (error) {
        console.error("Error validating token:", error);
        // Handle error, you might want to sign the user out
        setToken(null);
      }
    };

    fetchData();
  }, [token]);

  // Remove token only when closing the browser, not on refresh
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      localStorage.removeItem("token");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const logout = () => {
    setAuthenticated(false);
    setToken(null);
    setUser(null);
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

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
