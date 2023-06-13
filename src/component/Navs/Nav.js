import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';



function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
   navigate('/');
  };
  return (
    
        <>
            <Link to='/'>Home</Link>
            <Link to='/header'>Header</Link>
            <Link to='/Payments/StripeForm'>Payments</Link>
            <Link to='/Products/'>Produktet</Link>
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

    