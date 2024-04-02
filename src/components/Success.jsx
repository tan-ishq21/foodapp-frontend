
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './success.css'; // Importing CSS file for styling

const Success = () => {
    const handleContinueShopping = () => {
        // Redirect to home page
        window.location.href = '/';
    };
  return (
    <div className="success-container">
        <FaCheckCircle className="success-icon" /> 
      <h2 className='success-pay'>Payment Successful!</h2>
      <p>Thank you for your purchase.</p>
      <p>An email receipt has been sent to your inbox.</p>
      <button className="continue-shopping-btn" onClick={handleContinueShopping}>Continue Shopping</button>
    </div>
  );
}

export default Success;
