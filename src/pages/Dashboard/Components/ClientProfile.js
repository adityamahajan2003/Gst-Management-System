import React from "react";
import "./ClientProfile.css";

const ClientProfile = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div className="client-modal-overlay">
      <div className="client-profile-modal">
        <button className="client-close-btn" onClick={onClose}>×</button>

        <div className="client-header">
          <div className="client-avatar">C</div>
          <div className="client-info">
            <h2>{data.name}</h2>
            <p>@{data.name}</p>
            <p className="client-joined">Joined - {data.joined}</p>
          </div>
          <button className="client-message-btn">Message</button>
        </div>

        <div className="client-profile-details">
          {[
            { label: "Name", value: data.name },
            { label: "Designation", value: data.designation },
            { label: "Email address", value: data.email },
            { label: "Phone Number", value: data.phone },
            { label: "Residential Address", value: "XXXXXXXXXXXXXX" },
            { label: "Adhar Card Number", value: "XXXXXXXXXXXX" },
            { label: "PAN Card Number", value: "XXXXXXXXXX" },
            { label: "Password", value: "************" },
          ].map((field, idx) => (
            <div className="client-form-group" key={idx}>
              <label>{field.label}</label>
              <input type="text" defaultValue={field.value} />
            </div>
          ))}
        </div>

        <div className="client-profile-stats">
          <div className="client-stat client-purple">Revenue Generated <br /> XXXX</div>
          <div className="client-stat client-green">GST Collected <br /> XXXX</div>
          <div className="client-stat client-red">Outstanding Payments <br /> XXXX</div>
        </div>

        <div className="client-footer">
          <button className="client-delete-account">Delete Account</button>
          <select className="client-dropdown">
            <option>Select</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;
