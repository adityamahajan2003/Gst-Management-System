import React from "react";
import "./PendingApproval.css"; 

const PendingApproval = () => {
  return (
    <div className="pending-approval-card" >
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
