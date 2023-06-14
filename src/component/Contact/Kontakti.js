import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";

function Kontakti() {
    const [id, setId] = useState("");
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState([]);
const [kontakts, setUsers] = useState([]);
  useEffect(() => {
    (async () => await Load())();
  }, []);
  async function Load() {
    
    const result = await axios.get("https://localhost:8811/api/Kontakti/GetKontakti");
    setUsers(result.data);
    console.log(result.data);
  }
  async function save(event) {
  
    event.preventDefault();
    try {
      await axios.post(  'https://localhost:8811/api/Kontakti/AddKontakti', {
        
        name: name,
        email: email,
        message: message,
      
      });
      alert("Save successful!");
          setId("");
          setName("");
          setEmail("");
          setMessage("");
      
    
      Load();
    } catch (err) {
      alert(err);
    }
  }
    return (

        <div>
           
        <div class="containerK">
      
          <form className="FormaKontakti">
          <h1>Contact Here!</h1>
         
            <div class="form-groupK">
            
              <input  type="text" class="form-controlK" id="id" hidden value={id} onChange={(event) => {setId(event.target.value); }} />
   
              
              <input type="text" class="form-controlK" id="name" placeholder="Enter name" value={name}  onChange={(event) => { setName(event.target.value); }}  />
            </div>
  
            <div class="form-groupK">
          <input type="text" class="form-controlK" id="email" placeholder="Enter email" value={email} onChange={(event) => { setEmail(event.target.value); }} />
            </div>
  
            <div class="form-groupK">  <textarea name="message" id="message" rows="19" cols="50" placeholder="Enter message..."  value={message}  onChange={(event) => {  setMessage(event.target.value);  }} />
            </div>
  
            <div>
              <button class="btn-K" onClick={save}>
                Send 
              </button>
             
             
            </div>
          </form>
        </div>
        <br></br>
   
        
      
        </div>
      );
}

export default Kontakti