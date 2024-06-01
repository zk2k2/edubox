import React, { createContext, useState } from 'react';

export const AuthContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  userName: '',
  setUserName: () => {},
  role: '',
  setRole: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');
  const [role, setRole] = useState('');

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        userName,
        setUserName,
        role,
        setRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
