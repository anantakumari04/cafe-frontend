import React from 'react'
import { useState } from 'react'
import axios from 'axios';

export default function Login() {

    const [user,setUser] = useState({});

    const [error, setError] = useState();

     const API_URL = import.meta.env.VITE_API_URL

    const handleLogin = async () => {
  try {
    const url = `${API_URL}/api/users/login`;
   

    const result = await axios.post(url, user);

    
    setError("Welcome");
  } catch (err) {
   
    setError( "Something went wrong");
  }
};


  return (
    <div>
      <h2>Login Form</h2>
      <p>
        <input type='text' placeholder='email' onChange={(e)=>setUser({...user,email:e.target.value})}></input>
      </p>
      <p>
        <input type='password' placeholder='password' onChange={(e)=>setUser({...user, password :e.target.value})}></input>
      </p>
      <p>
        <button onClick={handleLogin}>Login</button>
      </p>
       {error && <p>{error}</p>}
       

    </div>
  )
}
