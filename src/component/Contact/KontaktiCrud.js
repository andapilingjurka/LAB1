import axios from "axios";
import { useEffect, useState } from "react";
import './KontaktiCrud.css';
 
 
function KontaktiCrud() {
 
const [id, setId] = useState("");
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState([]);
const [kontakts, setUsers] = useState([]);
  useEffect(() => {
    (async () => await Load())();
  }, []);
  async function Load() {
    
    const result = await axios.get("https://localhost:7032/api/Kontakti/GetKontakti");
    setUsers(result.data);
    console.log(result.data);
  }
  async function save(event) {
  
    event.preventDefault();
    try {
      await axios.post(  'https://localhost:7032/api/Kontakti/AddKontakti', {
        
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
 
  async function editKontakti(kontakts) {
    setName(kontakts.name);
    setEmail(kontakts.email);
    setMessage(kontakts.message);
    setId(kontakts.id);
  }
 
  async function DeleteKontakti(id) {
  await axios.delete( 'https://localhost:7032/api/Kontakti/DeleteKontakti/' + id);
   alert("Delete successful!");
   setId("");
   setName("");
   setEmail("");
   setMessage("");
  }
 
  async function update(event) {
    event.preventDefault();
    try {
 
  await axios.patch("https://localhost:7032/api/Kontakti/UpdateKontakti/"+ kontakts.find((u) => u.id === id).id || id,
        {
        id: id,
        name: name,
        email: email,
        message: message,
 
        }
      );
      alert("Update successful!");
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
         
      <div class="container mt-4">
     <img src="../images/pharmacy.jpg" />
        <form>
        <h1>Contact Here!</h1>
       
          <div class="form-group">
          
            <input  type="text" class="form-control" id="id" hidden value={id} onChange={(event) => {setId(event.target.value); }} />
 
            
            <input type="text" class="form-control" id="name" placeholder="Enter name" value={name}  onChange={(event) => { setName(event.target.value); }}  />
          </div>

          <div class="form-group">
        <input type="text" class="form-control" id="email" placeholder="Enter email" value={email} onChange={(event) => { setEmail(event.target.value); }} />
          </div>

          <div class="form-group">  <textarea name="message" id="message" rows="19" cols="50" placeholder="Enter message..."  value={message}  onChange={(event) => {  setMessage(event.target.value);  }} />
          </div>

          <div>
            <button class="btn btn-primary mt-4" onClick={save}>
              Send 
            </button>
           
            <button class="btn btn-warning mt-4" onClick={update}>
              Update
            </button>
          </div>
        </form>
      </div>
      <br></br>
 
      <table class="table table-dark" align="center">
        <thead>
          <tr>
          <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Message</th>
        
            <th scope="col">Option</th>
          </tr>
        </thead>
        {kontakts.map(function fn(kontakti) {
          return (
            <tbody>
              <tr>
                <th scope="row">{kontakti.id} </th>
                <td>{kontakti.name}</td>
                <td>{kontakti.email}</td>
                <td>{kontakti.message}</td>
              
                <td>               

                  <button
                    type="button"
                    class="option-btn edit-btn"
                    onClick={() => editKontakti(kontakti)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    class="option-btn delete-btn"
                    onClick={() => DeleteKontakti(kontakti.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    
      </div>
    );
    
  }
  
  export default KontaktiCrud;