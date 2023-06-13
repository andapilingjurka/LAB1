import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import UserLayout from './UserLayout';

export default function Produktet() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    Load();
  }, []);

  async function Load() {
    try {
      const response = await axios.get('https://localhost:8811/api/Product/GetProduct');
      setProducts(response.data);
    } catch (error) {
      console.error('Error loading products:', error);
    }
  }

  async function handleAddToCart(productId) {
    // Perform any necessary operations before adding to cart
    
    // Redirect to StripeForm page
    navigate('/Payments/StripeForm');
  }

  return (
    <div>
      <UserLayout />
      <div className="d-flex justify-content-center flex-row flex-wrap w-100 mt-5">
        {products.map((item, index) => (
          <div key={index} className="card produktetCard d-flex flex-row flex-wrap container m-2" style={{ width: '40vh', background: 'rgba(255,255,255,0.4)' }}>
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
                <button onClick={() => handleAddToCart(item.id)} className="btn btn-success">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}