import React from "react";
import "./LogoutModal.css";

const LogoutModal = ({ username = "@Adminxx", onCancel, onLogout }) => {
  return (
    <div className="logout-modal-overlay">
      <div className="logout-modal">
        <h2>Log out of {username} ?</h2>
        <p>You will still be able to access the Dashboard</p>
        <div className="logout-buttons">
          <button className="cancel-btn" onClick={onCancel}>
            Cancel
          </button>
          <button className="logout-btn" onClick={onLogout}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
