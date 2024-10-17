
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'
import Data from './Login.json'

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();
  const a = (e) => {
    e.preventDefault();
 
    const user = Data.find((user) => user.userid === username && user.password === password);
    if (user) {
      navigate('/API')
    }
    else {
      alert("Invalid");
    }
  };
  return (
          <body className='login' >
     
        <div className='wrapper'>
          <form action='' onSubmit={a}>
            <h1 className='sa'>Login</h1>
            <div className='input-box'>
              <input type='text' placeholder='Username' required value={username} onChange={(e) => setUsername(e.target.value)} className='s' />
         
            </div>
            <div className='input-box'>
              <input type='password' placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)} className='s'/>
          
            </div>
            <div className='remember-forget'>
              <label><input type='checkbox' />Remember me</label>
              <a href='#'>Forget password</a>
            </div>
            <button type='submit' id="button1" >Login</button>
 
            <div className='register-link'>
              <p>Don't have an account? <a href='#'>Register</a></p>
            </div>
          </form>
 
        </div>
        
      </body>
  )
}
