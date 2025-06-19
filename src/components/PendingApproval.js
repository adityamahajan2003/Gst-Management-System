import React from "react";
import { useNavigate } from "react-router-dom";
import "./PendingApproval.css"; // We'll write this next

const PendingApproval = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/requests");
  };

  return (
    <div className="pending-approval-card" onClick={handleClick}>
      <div className="card-header">
        <span>Pending Approval</span>
        <span className="dots">⋯</span>
      </div>
      <div className="avatars">
        <img src="https://via.placeholder.com/40" alt="avatar1" />
        <img src="https://via.placeholder.com/40" alt="avatar2" />
        <img src="https://via.placeholder.com/40" alt="avatar3" />
        <div className="more">+20</div>
      </div>
    </div>
  );
};

export default PendingApproval;
