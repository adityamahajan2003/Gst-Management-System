import React from "react";
import "./RequestModal.css";

const RequestModal = ({ consultant, onCancel, onConfirm }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p className="modal-text">
          You’ve selected <strong>{consultant.name}</strong> as your tax
          consultant.<br />
          <span>Send Request for Consultation</span>
        </p>
        <div className="modal-buttons">
          <button className="cancel-btn" onClick={onCancel}>
            Cancel
          </button>
          <button className="confirm-btn" onClick={onConfirm}>
            Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestModal;
