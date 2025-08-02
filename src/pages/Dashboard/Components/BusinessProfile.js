import React from "react";
import "./BusinessProfile.css";

const BusinessProfile = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div className="bp-modal-overlay">
      <div className="bp-business-profile-modal">
        <button className="bp-close-btn" onClick={onClose}>×</button>

        <div className="bp-header">
          <div className="bp-avatar">B</div>
          <div className="bp-info">
            <h2>{data.businessName}</h2>
            <p>{data.businessId}</p>
            <p className="bp-joined">Joined - {data.joined}</p>
          </div>
          <button className="bp-message-btn">Message</button>
        </div>

        <div className="bp-profile-details">
          {[
            { label: "Business Name", value: data.businessName },
            { label: "Business Type", value: data.businessType },
            { label: "No. of employees", value: "30" },
            { label: "Email address", value: data.email },
            { label: "Phone Number", value: "9134569081" },
            { label: "Business Address", value: "XXXXXXXXXXXXX" },
            { label: "GSTIN", value: "XXXXXXXXXXXX" },
            { label: "CIN", value: "XXXXXXXXXXXX" },
            { label: "PAN Card Number", value: "12A23498XXXX" },
            { label: "Password", value: "************" },
          ].map((field, idx) => (
            <div className="bp-form-group" key={idx}>
              <label>{field.label}</label>
              <input type="text" defaultValue={field.value} />
            </div>
          ))}
        </div>

        <div className="bp-profile-stats">
          <div className="bp-stat bp-purple">Revenue Generated <br /> XXXX</div>
          <div className="bp-stat bp-green">GST Collected <br /> XXXX</div>
          <div className="bp-stat bp-red">Outstanding Payments <br /> XXXX</div>
        </div>

        <div className="bp-footer">
          <button className="bp-delete-account">Delete Account</button>
          <select className="bp-dropdown">
            <option>Select</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default BusinessProfile;
