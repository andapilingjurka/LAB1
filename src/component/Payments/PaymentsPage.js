import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './PaymentsPage.css';
const PaymentsPage = () => {
  const location = useLocation();
  const { state } = location;
  const [customerId, setCustomerId] = useState('');
  const [receiptEmail, setReceiptEmail] = useState('');
  const [description, setDescription] = useState('');
  const [currency, setCurrency] = useState('');
  const [amount, setAmount] = useState('');

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
    } else {
      // Error creating payment
      console.error('Error creating payment');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleFormSubmit} className="p-4 mb-5 bg-white shadow-sm rounded border">
        <div className="form-group">
          <label htmlFor="customerId">Customer ID:</label>
          <input
            type="text"
            id="customerId"
            className="form-control"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="receiptEmail">Receipt Email:</label>
          <input
            type="text"
            id="receiptEmail"
            className="form-control"
            value={receiptEmail}
            onChange={(e) => setReceiptEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="currency">Currency:</label>
          <input
            type="text"
            id="currency"
            className="form-control"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="text"
            id="amount"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Submit</button>
      </form>
    </div>
  );
};

export default PaymentsPage;
