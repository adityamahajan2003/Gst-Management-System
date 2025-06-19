import React from 'react';

const Button = ({ text, onClick, className }) => (
  <button onClick={onClick} className={`submit-btn ${className}`}>{text}</button>
);


export default Button;