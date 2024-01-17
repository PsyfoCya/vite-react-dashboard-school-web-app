import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useMyContext = () => useContext(myContext);

const AuthProvider = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <AuthContext.Provider value={{ sidebarCollapsed, setSidebarCollapsed }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
