import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { decodeToken } from '../component/Login/jwtUtils';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
function Admin() {

    const token = localStorage.getItem('token');
    const decodedToken = decodeToken(token);
    const navigate = useNavigate();
  
 
    if (!decodedToken || decodedToken.role !== 'admin') {
      navigate('/login');
      return ; // Return null to prevent rendering the dashboard content
    }
      
  return (
    <div>
         <Link to='/adminProduktet'>Produktet</Link>
         <Link to='/adminStafi'>Stafi</Link>
    </div>
  )
}

export default Admin