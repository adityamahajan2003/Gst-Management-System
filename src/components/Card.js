import React from 'react';
import './Card.css';

const Card = ({ title, value, icon, borderColor }) => {
  return (
    <div className="card" style={{ borderColor }}>
      <div className="card-title">{title}</div>
      <div className="card-value">{value} {icon}</div>
    </div>
  );
};

export default Card;
