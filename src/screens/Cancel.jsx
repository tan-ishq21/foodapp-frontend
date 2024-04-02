// Cancel.jsx

import React from 'react';
import './cancel.css'; // Importing CSS file for styling

const Cancel = () => {

  const handleGoBack = () => {
    // Go back to the previous page
    window.history.back();
  };

  return (
    <div className="cancel-container">
      <h2 className='cancel-pay'>Payment Unsuccessful</h2>
      <p>Sorry, your payment could not be processed.</p>
      <p>Please try again later.</p>
      <button className="go-back-btn" onClick={handleGoBack}>Go Back</button>
    </div>
  );
}

export default Cancel;
