import React from 'react';
import './Card.css';

const Card = ({ title, value, icon, borderColor }) => {
  return (
    <div className="dashboard-card" style={{ borderColor }}>
      <div className="dashboard-card-title">{title}</div>
      <div className="dashboard-card-value">{value} {icon}</div>
    </div>
  );
};

export default Card;
