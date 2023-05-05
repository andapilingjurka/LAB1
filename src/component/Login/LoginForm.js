import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
//import "./Login.css";
import { BrowserRouter as Router, Route, Switch, Routes} from 'react-router-dom';

import logo from "./logo.png";
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('https://localhost:7178/api/User/Login', {
        email,
        password,
      });
      if (data) {
        setMessage('Login successful');
        navigate("/test")
        // Redirect to home page or any other page
      }
    } catch (error) {
      console.log(error.response.data);
      setMessage('Invalid email or password');
    }
  };

  return (
    <div class="container">
   <div> <img src={logo} /> </div>

      <form onSubmit={handleSubmit}>
      {message && <div>{message}</div>}
        <div>
          <label>Email</label> 
          <input type="email" placeholder='Enter your Email' class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password</label> 
          <input type="password" placeholder='Enter Password' class="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button  type="submit">Log In</button>
        <Link to={"/registration"}>Register here</Link>
      
      </form>
      
       
    </div>
  );
}

export default LoginForm;
