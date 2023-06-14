import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { decodeToken } from '../component/Login/jwtUtils';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import createUtilityClassName from 'react-bootstrap/esm/createUtilityClasses';
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
   < div className="side-menu">
    <h1>DASHBOARD</h1>
      <ul>
       
        <li style={{textDecoration:'none', listStyle:'none'}}> <Link style={{textDecoration:'none', color:'white', fontSize:'30px'}} to='/adminProduktet' id="l1">Produktet</Link></li>
        <li style={{textDecoration:'none', listStyle:'none'}}> <Link style={{textDecoration:'none', color:'white', fontSize:'30px'}}  to='/adminStafi' id="l2">Stafi</Link></li>
        <li style={{textDecoration:'none', listStyle:'none'}}> <Link style={{textDecoration:'none', color:'white', fontSize:'30px'}}  to='/ProduktiKozmetikCrud' id="l3">Produkte Kozmetike</Link></li>
        <li style={{textDecoration:'none', listStyle:'none'}}> <Link style={{textDecoration:'none', color:'white', fontSize:'30px'}}  to='/kontaktCrud' id="l3">Kontakti</Link></li>

        </ul>
   
        </div>
        <div class="container1">
            <h1>Welcome to Dashboard !</h1>
            <div className="fotojaDashboard">
      <img src="./photos/fotojaDashboard.jpg" alt="Description of the image" />
    </div>
  </div>
</div>
  )

  }
export default Admin;