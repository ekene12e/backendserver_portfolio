import React, { useContext, useState } from 'react'
import { AuthContext } from './AuthContext';
import axios from 'axios'

const Login = () => {
  const { auth, handleLogin, err } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const data = {
    title: 'play',
    name: "play",
    icon: "play",
    date: "play",
    tags: [1,2,3],
  }
  const handlePlay = async () => {
      const s = await axios.post('http://localhost:3000/add/play', data)
      

  }
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
      <button onClick={handlePlay}>Play</button>
    </div>
  );
};

export default Login



  