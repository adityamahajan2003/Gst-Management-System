import React from 'react';
import './OTPInput.css';

const OTPInput = ({ value, onChange }) => {
  const handleChange = (e, index) => {
    const updated = [...value];
    updated[index] = e.target.value.slice(0, 1);
    onChange(updated);

    // Auto-focus next input
    if (e.target.nextSibling && e.target.value) {
      e.target.nextSibling.focus();
    }
  };

  return (
    <div className="otp-container">
      {value.map((digit, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          value={digit}
          onChange={(e) => handleChange(e, index)}
          className="otp-box"
        />
      ))}
    </div>
  );
};

export default OTPInput;
