import React from 'react'
import axios from "axios";
import { useEffect, useState, useRef } from "react";



 
function Test() {
 
const [id, setId] = useState("");
const [name, setName] = useState("");
const [description, setDescription] = useState("");
const [price, setPrice] = useState("");
const [quantity, setQuantiry] = useState("");
const [imgUrl, setImg] = useState("");
const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => await Load())();
  }, []);
  async function Load() {
    
    const result = await axios.get("https://localhost:7178/api/Product/GetProduct");
    setProducts(result.data);
    console.log(result.data);
  }
  //per me kthy vleren e input ne null
  const inputFileRef = useRef(null);
  async function save(event) {
    


    event.preventDefault();
    try {
      await axios.post("https://localhost:7178/api/Product/addProduct", {
        
        name: name,
        description: description,
        price: price,
        quantity: quantity,
        imgUrl: imgUrl,
        
      
      });
      alert("Product Registation Successfully");
          setId("");
          setName("");
          setDescription("");
          setPrice("");
          setQuantiry("");
          setImg("");
          inputFileRef.current.value = '';
      
    
      Load();
    } catch (err) {
      alert(err);
    }
  }
 
  
////////////////////////////////////////////////////////////////
  
async function editProduct(products) {
  setName(  products.name);
  setDescription(products.description);
  setId(products.id);
}

async function deleteProduct(id) {
  await axios.delete("https://localhost:7178/api/Product/DeleteProduct/" + id);
  alert("Product deleted successfully");
  setId("");
  setName("");
  setDescription("");
  setPrice("");
  setQuantiry("");
  setImg("");
}

async function update(event, products) {
  event.preventDefault();
  try {
    const product = products.find((p) => p.id === id);
    await axios.patch("https://localhost:7178/api/Product/UpdateProduct/" + product.id, {
      id: product.id,
      name: name,
      description: description,
      price: price,
      quantity: quantity,
      imgUrl: imgUrl,
    });
    alert("Registration Updated");
    setId("");
    setName("");
    setDescription("");
    setPrice("");
    setQuantiry("");
    setImg("");

    

    Load();
  } catch (err) {
    alert(err);
  }
}

///////////////////////////////////////////////////////////////
  return (
    <div>
          <h1>Product Details</h1>
      <div class="container mt-4">
        <form>
          <div class="form-group">
          
            <input
              type="text"
              class="form-control"
              id="id"
              hidden
              value={id}
              onChange={(event) => {
                setId(event.target.value);
              }}
            />
 
            <label>Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label>Description</label>
            <input
              type="text"
              class="form-control"
              id="description"
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label>Price</label>
            <input
              type="text"
              class="form-control"
              id="price"
              value={price}
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label>Quantity</label>
            <input
              type="text"
              class="form-control"
              id="quantity"
              value={quantity}
              onChange={(event) => {

                setQuantiry(event.target.value);
                
              }}
            />
          </div>
          <div class="form-group" >
            <label>ImgUrl</label>
            <input
              type="file"
              ref={inputFileRef}
              class="form-control"
              id="imgUrl"
              
              onChange={(event) => {
                setImg("/photos/"+event.target.files[0].name);
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
      </div>
      <br></br>
 
      <table class="table table-dark" align="center">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col"> Name</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">quantity</th>
            <th scope="col">Photos</th>


        
          
          </tr>
        </thead>
        {products.map(function fn(produkt) {
        
          return (
            <tbody>
              <tr>
                
                <th scope="row">{produkt.id} </th>
                <td>{produkt.name}</td>
                <td>{produkt.description}</td>
                <td>{produkt.price}</td>
                <td>{produkt.quantity}</td>
                <img src={produkt.imgUrl} style={{width:'200px'}} />

                <td>
                  <button
                    type="button"
                    class="btn btn-warning"
                    onClick={() => editProduct(produkt)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => deleteProduct(produkt.id)}
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
  )
}

export default Test