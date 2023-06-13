import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { decodeToken } from '../Login/jwtUtils';


function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
   navigate('/');
  };

  const token = localStorage.getItem('token');
  const decodedToken = decodeToken(token);
  const isAdmin = decodedToken && decodedToken.role === 'admin';
  return (
    
        <>
            
            <Link to='/'>Home</Link>
            <Link to='/header'>Header</Link>
            <Link to='/Payments/StripeForm'>Payments</Link>
            <Link to='/Products/'>Produktet</Link>
            {isAdmin && <Link to='/admin'>Dashboard</Link>}
            
            {localStorage.getItem('token') ? (
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
          
        )}
        
        </>
  
  )
}

export default Nav;

    