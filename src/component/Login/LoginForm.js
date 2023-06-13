import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
//import "./Login.css";
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import logo from "./logo.png"
import { decodeToken } from './jwtUtils';




function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://localhost:8811/api/User/Login', {
        email,
        password,
      });
      
      const { token } = response.data;
      localStorage.setItem('token', token);
      const role = decodeToken(token).role;
      if (response) {
        setMessage('Login successful');
        if (role === 'admin') {
          navigate("/admin")
        } else if (role === 'client') {
          navigate('/');
        }


        // Redirect to home page or any other page
      }
    } catch (error) {
      console.log(error.response.data);
      setMessage('Invalid email or password');
    }
  };

  return (
    <div className="container_login">
      {/* <Nav /> */}
      {/* <img src={logo}/> */}
      <div className='form-content'>
        <form onSubmit={handleSubmit} className='login_form'>
          {message && <div>{message}</div>}
          <div>
            <label>Email</label>
            <input type="email" placeholder='Enter your Email' class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Password</label>
            <input type="password" placeholder='Enter Password' class="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button class="form-control" type="submit">Log In</button>
          <br></br><br></br>
          <Link to={"/registration"}>Don't have an account? Register here</Link>

        </form>

      </div>
      <div className='photo'>  </div>
    </div>
  );
}

export default LoginForm;
