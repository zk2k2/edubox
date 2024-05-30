import React, { createContext, useState } from 'react';

export const AuthContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  userName: '',
  setUserName: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, userName, setUserName }}
    >
      {children}
    </AuthContext.Provider>
  );
};
