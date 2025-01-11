// src/context/AuthContext.js
import React, { createContext, useState, useContext } from 'react';

// Create Context for Auth
const AuthContext = createContext();

// AuthProvider component to wrap around the app
export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({ user: null, isAuthenticated: false });

  const login = (email, password) => {
    // Replace this logic with real authentication
    setAuthState({ user: { email }, isAuthenticated: true });
  };

  const logout = () => {
    setAuthState({ user: null, isAuthenticated: false });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use authentication context
export const useAuth = () => {
  return useContext(AuthContext);
};
