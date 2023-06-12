import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import UserLayout from './UserLayout';
import { Card } from 'react-bootstrap';

export default function View_Product() {
  const { productID } = useParams();
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState({});

  useEffect(() => {
    (async () => {
      await Load();
    })();
  }, []);

  async function Load() {
    const result = await axios.get('https://localhost:7178/api/Product/GetProduct');
    setProducts(result.data);
    const filteredProduct = result.data.find((product) => product.id === Number(productID));
    setFilteredProduct(filteredProduct);
  }

  console.log(filteredProduct);

  return (
    <>
      <UserLayout />
      {filteredProduct && (
        <div id="products" className='my-5 container d-flex justify-content-center'>
          <div className='row w-75'>
            <div className='col-md-6'>
              <img className='img-fluid rounded w-75' src={filteredProduct.imgUrl} alt="Product Image" style={{ maxWidth: '100%', maxHeight: '300px' }} />
            </div>
            <div className='col-md-6 d-flex flex-column justify-content-center'>
              <h2 className="mb-4">{filteredProduct.name}</h2>
              <p className="mb-4">{filteredProduct.description}</p>
              <p className="h4">${filteredProduct.price}</p>
              <button className="btn btn-primary mt-4">Add to Cart</button>
            </div>
          </div>
        </div>
)}

      <hr/>
      
        <h5 className='text-center'>Our Other Products:</h5>
        <div className="d-flex justify-content-center flex-row flex-wrap w-100 mt-5">
          {products.slice(0,4).map((item, index) => (
            <div key={index} className="card produktetCard d-flex flex-row flex-wrap container m-1" style={{ width: '40vh' }}>
              <div className="d-flex justify-content-center border-bottom py-4">
                <img src={item.imgUrl} className="card-img-top w-25" alt="Product Image" />
              </div>
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description.substring(0, 30)}...</p>
                </div>
                <div className="d-flex flex-row justify-content-around align-items-end">
                  <a href={`/view_product/${item.id}`} className="btn btn-primary">View Product</a>
                  <a href="#" className="btn btn-success">Add to Cart</a>
                </div>
              </div>
            </div>
          ))}
        </div>
    </>
  );
}
