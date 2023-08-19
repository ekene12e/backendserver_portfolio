import React, { useContext, useState } from 'react'
import { AuthContext } from './AuthContext';
import axios from 'axios'

const Login = () => {
  const { auth, handleLogin, err } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      {err && (
        <small style={{ color: "red", fontSize: "12px" }}>
          wrong username or password
        </small>
      )}
      <button onClick={() => handleLogin(name, password)}>Login</button>
    </div>
  );
};

export default Login



  