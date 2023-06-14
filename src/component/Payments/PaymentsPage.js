import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
// import './PaymentsPage.css';
const PaymentsPage = () => {
  const location = useLocation();
  const { state } = location;
  const [customerId, setCustomerId] = useState('');
  const [receiptEmail, setReceiptEmail] = useState('');
  const [description, setDescription] = useState('');
  const [currency, setCurrency] = useState('');
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    if (state && state.product) {
      const { price, description } = state.product;
      setDescription(description);
      setAmount(price);
    }
  }, [state]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Send form data to your backend API
    const response = await fetch('https://localhost:8811/api/payment/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        customerId,
        receiptEmail,
        description,
        currency,
        amount,
      }),
    });

    if (response.ok) {
      // Payment created successfully
      const payment = await response.json();
      console.log('Payment created:', payment);
      navigate('/Products')
      
    } else {
      // Error creating payment
      console.error('Error creating payment');
    }
  };

  return (
    <div style={{ backgroundColor: '#c7eaff' ,minHeight:'100vh',fontFamily: 'Candara',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <form onSubmit={handleFormSubmit} style={{borderRadius:'20px',border: '1px solid #ccc',padding:'100px',background:' #F0F0F0',marginTop:'50px' }}>
        <div className="form-group">
          <label  style={{fontWeight:'bold',fontSize:'18px'}} htmlFor="customerId">Customer ID:</label>
          <input
            type="text"
            id="customerId"
            className="form-control"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
            style={{ padding: '10px',borderRadius: '10px', border: '1px solid #ccc',width:'400px'}}
          />
        </div>
        <div className="form-group">
          <label  style={{fontWeight:'bold',fontSize:'18px'}} htmlFor="receiptEmail">Receipt Email:</label>
          <input
            type="text"
            id="receiptEmail"
            className="form-control"
            value={receiptEmail}
            onChange={(e) => setReceiptEmail(e.target.value)}
            style={{ padding: '10px',borderRadius: '10px', border: '1px solid #ccc',width:'400px'}}
          />
        </div>
        <div className="form-group">
          <label  style={{fontWeight:'bold',fontSize:'18px'}} htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ padding: '10px',borderRadius: '10px', border: '1px solid #ccc',width:'400px'}}
          />
        </div>
        <div className="form-group">
          <label  style={{fontWeight:'bold',fontSize:'18px'}} htmlFor="currency">Currency:</label>
          <input
            type="text"
            id="currency"
            className="form-control"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            style={{ padding: '10px',borderRadius: '10px', border: '1px solid #ccc',width:'400px'}}
          />
        </div>
        <div className="form-group">
          <label  style={{fontWeight:'bold',fontSize:'18px'}} htmlFor="amount">Amount:</label>
          <input
            type="text"
            id="amount"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{ padding: '10px',borderRadius: '10px', border: '1px solid #ccc',width:'400px'}}
          />
        </div>
        <div style={{marginTop:'40px'}}>
        <button type="submit" className="btn btn-primary btn-block" style={{padding:'10px',borderRadius:'10px',width:'400px',marginTop:'30px',background:'darkred',color:'white',fontWeight:'bolder',border: '1px solid #ccc',fontSize:'18px'}} >Submit</button>
        </div>
      </form>
    </div>
  );
};

export default PaymentsPage;