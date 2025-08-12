import React from "react";
import "./LogoutCustomerModule.css";

const LogoutCustomerModule = ({ username, onCancel, onLogout }) => {
  return (
    <div className="logout-modal-overlay">
      <div className="logout-modal">
        <h2>
          Log out of <span>{username}</span> ?
        </h2>
        <p>You will still be able to access the Dashboard</p>
        <div className="logout-buttons">
          <button className="cancel-button" onClick={onCancel}>
            Cancel
          </button>
          <button className="logout-button" onClick={onLogout}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutCustomerModule;
