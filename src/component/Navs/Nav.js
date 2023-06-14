import React, { useEffect, useState } from 'react';
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
      <div style={{ display: 'flex', fontFamily: 'Candara', justifyContent: 'right', alignItems: 'center', padding: '20px', backgroundColor: 'white', borderBottom: '1px solid white' }}>
        <Link to="/" style={{ marginLeft: '10px', marginRight: '40px', textDecoration: 'none', color: 'black', fontWeight: 'bolder', fontSize: '20px' }}>Home</Link>
        <Link to="/Products/" style={{ marginLeft: '10px', marginRight: '40px', textDecoration: 'none', color: 'black', fontWeight: 'bolder', fontSize: '20px' }}>Produktet</Link>
        <Link to="/kontakti" style={{ marginLeft: '10px', marginRight: '40px', textDecoration: 'none', color: 'black', fontWeight: 'bolder', fontSize: '20px' }}>Contact us</Link>
        {isAdmin && <Link to="/admin" style={{ marginLeft: '10px', marginRight: '40px', textDecoration: 'none', color: 'black', fontWeight: 'bolder', fontSize: '20px' }}>Dashboard</Link>}

        {localStorage.getItem('token') ? (
          
            <button onClick={handleLogout} style={{ marginLeft: '10px', marginRight: '40px', padding: '5px 10px', backgroundColor: 'black', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bolder', fontSize: '20px', }}>Logout</button>
          
        ) : (
          <Link to="/login" style={{ marginLeft: '10px', marginRight: '40px', textDecoration: 'none', color: '#333', fontWeight: 'bolder', fontSize: '20px' }}>Login</Link>
        )}
      </div>
    </>

  )
}

export default Nav;
