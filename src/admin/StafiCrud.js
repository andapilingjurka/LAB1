import axios from "axios";
import { useEffect, useState } from "react";
// import '../StafiCrud.css';


function StafiCrud() {
     
const [id, setId] = useState("");
const [stname, setName] = useState("");
const [pershkrimi, setPershkrimi] = useState("");
const [stafi, setUsers] = useState([]);
  useEffect(() => {
    (async () => await Load())();
  }, []);
  async function Load() {
    
    const result = await axios.get("https://localhost:8811/api/Stafi/GetStafi");
    setUsers(result.data);
    console.log(result.data);
  }
  async function save(event) {
  
    event.preventDefault();
    try {
      await axios.post("https://localhost:8811/api/Stafi/AddStafi", {
        
        stname: stname,
        pershkrimi: pershkrimi,
      
      });
      alert("Staff Member Registered Successfully");
          setId("");
          setName("");
          setPershkrimi("");
      
    
      Load();
    } catch (err) {
      alert(err);
    }
  }
 
  async function editStafi(stafi) {
    setName(stafi.stname);
    setPershkrimi(stafi.pershkrimi);
  
    setId(stafi.id);
  }
 
  async function DeleteStafi(id) {
  await axios.delete("https://localhost:8811/api/Stafi/DeleteStafi/" + id);
   alert("Employee deleted Successfully");
   setId("");
   setName("");
   setPershkrimi("");
   Load();
  }
 
  async function update(event) {
    event.preventDefault();
    try {
 
  await axios.patch("https://localhost:8811/api/Stafi/UpdateStafi/"+ stafi.find((u) => u.id === id).id || id,
        {
        id: id,
        stname: stname,
        pershkrimi: pershkrimi,
        }
      );
      alert("Registration Updated");
      setId("");
      setName("");
      setPershkrimi("");
    
      Load();
    } catch (err) {
      alert(err);
    }
  }
    return (
      <div class="forma">
        <h1>STAFI</h1>
        <div class="container mt-4">
            <form>
                <div class="form-group">
                    <input type="text" class="form-control"
                    id='id' hidden value={id}
                    onChange={(event)=>{
                        setId(event.target.value);
                    }}
                    />
                    <label>Emri dhe Mbiemri i Anëtarit:</label>
                    <input type="text" 
                    class="form-control"
                    id='stname' 
                    value={stname}
                    onChange={(event)=>{
                        setName(event.target.value);
                    }}
                    />
                </div>
                <div class="form-group">
                <label>Përshkrimi i Stafit:</label>
                <input type="text" 
                    class="form-control"
                    id='pershkrimi' 
                    value={pershkrimi}
                    onChange={(event)=>{
                        setPershkrimi(event.target.value);
                    }}
                    />
                </div>
                <div>
            <button class="btn btn-primary mt-4" onClick={save}>
              Register
            </button>
            <button class="btn btn-warning mt-4" onClick={update}>
              Update
            </button>
          </div>
        </form>
      
      <br></br>
 
      <table class="table table-dark" align="center">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Emri dhe Mbiemri</th>
            <th scope="col">Përshkrimi</th>
        
            <th scope="col">Option</th>
          </tr>
        </thead>
        {stafi.map(function fn(stafi) {
          return (
            <tbody>
              <tr>
                <th scope="row">{stafi.id} </th>
                <td>{stafi.stname}</td>
                <td>{stafi.pershkrimi}</td>
                
                <td>
                  <button  
                    type="button"
                    class="btn btn-warning"
                    onClick={() => editStafi(stafi)}
                  >
                    Edit
                  </button>
                  <button 
                    type="button"
                    class="btn btn-danger"
                    onClick={() => DeleteStafi(stafi.id)}
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
      </div>

          
      
    );
  }
  
  export default StafiCrud;