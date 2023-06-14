import axios from "axios";
import { useEffect, useState } from "react";




function ProduktiKozmetikCrud() {
     
const [id, setId] = useState("");
const [name, setName] = useState("");
const [description, setDescription] = useState("");
const [price, setPrice] = useState("");
const [imgUrl, setImgUrl] = useState("");
const [produktikozmetik, setUsers] = useState([]);
  useEffect(() => {
    (async () => await Load())();
  }, []);
  async function Load() {
    
    const result = await axios.get("https://localhost:7119/api/ProduktiKozmetik/GetProduktiKozmetik");
    setUsers(result.data);
    console.log(result.data);
  }
  async function save(event) {
  
    event.preventDefault();
    try {
      await axios.post( 'https://localhost:7119/api/ProduktiKozmetik/AddProduktiKozmetik', {
        
        name: name,
        description: description,
        price: price,
        imgUrl: imgUrl,



      
      });
      alert("Staff Member Registered Successfully");
          setId("");
          setName("");
          setDescription("");
          setPrice("");
          setImgUrl("");
      
    
      Load();
    } catch (err) {
      alert(err);
    }
  }
 
  async function editProduktiKozmetik(produktikozmetik) {
    setName(produktikozmetik.name);
    setDescription(produktikozmetik.description);
    setPrice(produktikozmetik.price);
    setImgUrl(produktikozmetik.imgUrl);
  
    setId(produktikozmetik.id);
  }
 
  async function DeleteProduktiKozmetik(id) {
  await axios.delete('https://localhost:8811/api/ProduktiKozmetik/DeleteProduktiKozmetik/' + id);
   alert("Employee deleted Successfully");
   setId("");
   setName("");
   setDescription("");
   setPrice("");
   setImgUrl("");


   Load();
  }
 
  async function update(event) {
    event.preventDefault();
    try {
 
  await axios.patch( 'https://localhost:8811/api/ProduktiKozmetik/UpdateProduktiKozmetik/'+ produktikozmetik.find((u) => u.id === id).id || id,
        {
        id: id,
        name: name,
        description: description,
        price: price,
        imgUrl: imgUrl,

        }
      );
      alert("Registration Updated");
      setId("");
      setName("");
      setDescription("");
      setPrice("");
      setImgUrl("");
    
      Load();
    } catch (err) {
      alert(err);
    }
  }
    return (
      <div class="forma">
        <h1 class="h1">PRODUKTET KOZMETIKE</h1>
        <div class="container mt-4">
            <form>
                <div class="form-group">
                    <input type="text" class="form-control"
                    id='id' hidden value={id}
                    onChange={(event)=>{
                        setId(event.target.value);
                    }}
                    />
                    <label>Emri i produktit</label>
                    <input type="text" 
                    class="form-control"
                    id='name' 
                    value={name}
                    onChange={(event)=>{
                        setName(event.target.value);
                    }}
                    />
                </div>
                <div class="form-group">
                <label>Pershkrimi</label>
                <input type="text" 
                    class="form-control"
                    id='description' 
                    value={description}
                    onChange={(event)=>{
                        setDescription(event.target.value);
                    }}
                    />
                </div>
                <div class="form-group">
                <label>Çmimi</label>
                <input type="text" 
                    class="form-control"
                    id='price' 
                    value={price}
                    onChange={(event)=>{
                        setPrice(event.target.value);
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
            <th scope="col">Emri Produktit</th>
            <th scope="col">Pershkrimi</th>
            <th scope="col">Çmimi</th>
            <th scope="col">Foto</th>
           
            
        
            <th scope="col">Option</th>
          </tr>
        </thead>
        {produktikozmetik.map(function fn(produktikozmetik) {
          return (
            <tbody>
              <tr>
                <th scope="row">{produktikozmetik.id} </th>
                <td>{produktikozmetik.name}</td>
                <td>{produktikozmetik.description}</td>
                <td>{produktikozmetik.price}</td>
                <td>{produktikozmetik.imgUrl}</td>
                
                <td>
                  <button  
                    type="button"
                    class="btn btn-warning"
                    onClick={() => editProduktiKozmetik(produktikozmetik)}
                  >
                    Edit
                  </button>
                  <button 
                    type="button"
                    class="btn btn-danger"
                    onClick={() => DeleteProduktiKozmetik(produktikozmetik.id)}
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
  
  export default ProduktiKozmetikCrud;