import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';



function Registration() {
  
 
        const [Id, setId] = useState("");
        const [FirstName, setName] = useState("");
        const [LastName, setlname] = useState("");
        const [Email, setemail] = useState("");
        const [Password, setpassword] = useState("");
        const [confirmPassword, setconfirmpassword] = useState("");
        const [role, setrole] = useState("client");
        const [message, setMessage] = useState('');
         const handleSubmit =  async(event) => {
              event.preventDefault();
            
          
            // Compare the values and show an error message if they don't match
            if (Password !== confirmPassword) {
              
              setMessage('Passwords do not match');
              return;
            }
            
          
            
            try {
              const response = await axios.post("https://localhost:8811/api/User/Register", {
               
                FirstName: FirstName,
                Email: Email,
                Password: Password,
                LastName: LastName,
                role:role,
                
                
                
                
            
              
              });
              alert("Registation Successfully");
              setMessage(response.data);
                  setId("");
                  setName("");
                  setlname("");
                  setemail("");
                  setpassword("");
                  setconfirmpassword("");
                  setrole("");
                  
                  
                
                
            
            
             
            } catch (err) {
              alert(err.response.data);
            }
          }
  return (
    <div className="container_login" >
      <div className='photo'>  </div> 
     <div className='form-content'>
        <form onSubmit={handleSubmit} className='login_form'>
       
            <input type='text' id='Id' value={Id} 
              onChange={(event) => {
                setId(event.target.value);
              }} hidden/>
             
               <label>First Name</label>
            <input type='text' id='FisrtName' value={FirstName} class="form-control"
              onChange={(event) => {
                setName(event.target.value);
              }} />
              <label>Last Name</label>
            <input type='text' id='LastName'  value={LastName} class="form-control"
              onChange={(event) => {
                setlname(event.target.value);
              }} />
            <label>Email</label>
            <input type='email' id='Email'  value={Email} class="form-control"
              onChange={(event) => {
                setemail(event.target.value);
              }} />
            
            <label>Password</label>
            <input type='password' id='password' name='password' value={Password} class="form-control"
              onChange={(event) => {
                setpassword(event.target.value);
              }} />
            <label>Confirm Password</label>
            <input type='password' id='repeat_password'  name='repeat_password' value={confirmPassword} class="form-control"
              onChange={(event) => {
                setconfirmpassword(event.target.value);
              }}
              />
               
             
             
            <button >Save</button>
            <br></br>
            <Link to={"/login"}>Press here to Log In </Link>
        </form>
        </div>
        
    </div>

  )
}

export default Registration