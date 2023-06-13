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
    <div className="container">
     
  <form onSubmit={handleFormSubmit}>
  <h1>Register for Purchase!</h1>
    <div>
      <label htmlFor="customerName">Customer Name:</label>
      <input type="text" id="customerName" value={customerName} onChange={(e) => setCustomerName(e.target.value)}/>
    </div>
    <div>
      <label htmlFor="customerEmail">Customer Email:</label>
      <input type="text" id="customerEmail" value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)} />
    </div>
    <div className="card-info">
      <label>Cards Accepted :</label>
      <div className="inputBox">
        <img src={card_img} alt="" />
      </div>
    </div>
    <div>
      <label htmlFor="cardNumber">Card Number:</label>
      <input type="text" id="cardNumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)}/>
    </div>
    <div>
      <label htmlFor="expirationMonth">Expiration Month:</label>
      <input type="text" id="expirationMonth" value={expirationMonth} onChange={(e) => setExpirationMonth(e.target.value)}/>
    </div>
    <div>
      <label htmlFor="expirationYear">Expiration Year:</label>
      <input type="text" id="expirationYear" value={expirationYear} onChange={(e) => setExpirationYear(e.target.value)}/>
    </div>
    <div>
      <label htmlFor="cvc">CVC:</label>
      <input type="text" id="cvc" value={cvc} onChange={(e) => setCvc(e.target.value)}/>
    </div>
    <button type="submit">Submit</button>
   
  </form>
</div>

  );
};

export default StripeForm;