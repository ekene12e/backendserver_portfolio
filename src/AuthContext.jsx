// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
  const users = [{name: 'harry', password: 'harry12'}, {name:'ekene', password: '4445'}]
  const [auth, setAuth]=useState(false)
  const [err, setErr] = useState(false)


  const handleLogin = (name, password) => {
    users.map(user => {
      if (user.name === name && user.password === password){ 
        setAuth(true)
      
      }  
    })
    !auth && setErr(true)
  }

  return (
    <AuthContext.Provider value={{ users, auth, setAuth, handleLogin, err, setErr }}>
      {children}
    </AuthContext.Provider>
  );
};