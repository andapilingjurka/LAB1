import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './StripeForm.css';
import card_img from "./card_img.png";

const StripeForm = () => {
  const navigate = useNavigate();
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationMonth, setExpirationMonth] = useState('');
  const [expirationYear, setExpirationYear] = useState('');
  const [cvc, setCvc] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Send the form data to your backend API
    const response = await fetch('https://localhost:8811/api/customer/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: customerName,
        email: customerEmail,
        creditCard: {
          cardNumber,
          expirationMonth,
          expirationYear,
          cvc,
        },
      }),
    });

    if (response.ok) {
      // Customer created successfully
      const customer = await response.json();
      console.log('Created customer:', customer);

      // Redirect to Payments page
      navigate('/paymentsPage');
    } else {
      // Error creating customer
      console.error('Error creating customer');
    }
  };

  return (
    <div style={{ backgroundColor: '#c7eaff', minHeight:'100vh', paddingTop:'100px', fontFamily: 'Candara', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <form onSubmit={handleFormSubmit}>
        <h1 style={{ textAlign: 'center', marginBottom:'30px', fontWeight:'bold', fontSize:'45px' }}>Register for Purchase!</h1>
        <div style={{ margin: '10px 0', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <label style={{ fontWeight:'bold', fontSize:'18px' }} htmlFor="customerName">Customer Name:</label>
          <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} style={{ padding: '5px', borderRadius: '10px', border: '1px solid #ccc' }}/>
        </div>
        <div style={{ margin: '10px 0', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <label style={{ fontWeight:'bold', fontSize:'18px' }} htmlFor="customerEmail">Customer Email:</label>
          <input type="text" value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)} style={{ padding: '5px', borderRadius: '10px', border: '1px solid #ccc' }}/>
        </div>
        <div style={{ margin: '10px 0', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <label style={{ fontWeight:'bold', fontSize:'18px' }}>Cards Accepted:</label>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={card_img} alt="" />
          </div>
        </div>
        <div style={{ margin: '10px 0', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <label style={{ fontWeight:'bold', fontSize:'18px' }} htmlFor="cardNumber">Card Number:</label>
          <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} style={{ padding: '5px', borderRadius: '10px', border: '1px solid #ccc' }}/>
</div>
<div style={{ margin: '10px 0', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
<label style={{ fontWeight:'bold', fontSize:'18px' }} htmlFor="expirationMonth">Expiration Month:</label>
<input type="text" value={expirationMonth} onChange={(e) => setExpirationMonth(e.target.value)} style={{ padding: '5px', borderRadius: '10px', border: '1px solid #ccc' }}/>
</div>
<div style={{ margin: '10x 0', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
<label style={{ fontWeight:'bold', fontSize:'18px' }} htmlFor="expirationYear">Expiration Year:</label>
<input type="text" value={expirationYear} onChange={(e) => setExpirationYear(e.target.value)} style={{ padding: '5px', borderRadius: '10px', border: '1px solid #ccc' }}/>
</div>
<div style={{ margin: '10px 0', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
<label style={{ fontWeight:'bold', fontSize:'18px' }} htmlFor="cvc">CVC:</label>
<input type="text" value={cvc} onChange={(e) => setCvc(e.target.value)} style={{ padding: '5px', borderRadius: '10px', border: '1px solid #ccc' }}/>
</div>
<div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
<button type="submit" style={{ padding: '5px', borderRadius: '10px', width: '400px', marginTop: '30px', background: 'darkred', color: 'white', fontWeight: 'bolder', border: '1px solid #ccc', fontSize: '18px' }}>Submit</button>
</div>
</form>
</div>
);
};

export default StripeForm;