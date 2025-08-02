import React, { useState } from "react";
import "./ClientManagementBusiness.css";
import ClientManagementData from "../../../Config/clientmanagementbusiness.json";
import BusinessProfile from "./BusinessProfile";
import { FaSlidersH, FaPlus } from "react-icons/fa";

const ClientManagementBusiness = ({ setSelectedClientTab }) => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const config = ClientManagementData.find((item) => item.tabs && item.heading);
  const businessData = ClientManagementData.filter((item) => item.businessId);

  return (
    <div className="team-members-container">
      <div className="client-tabs">
        <button
          className="client-tab active"
          onClick={() => setSelectedClientTab("Business")}
        >
          Business
        </button>
        <button
          className="client-tab"
          onClick={() => setSelectedClientTab("Client")}
        >
          Client
        </button>
      </div>

      <div className="header-section">
        <h2 className="heading">{config.heading}</h2>
        <div className="actions">
          <button className="client-filter-btn">
            <FaSlidersH className="icon" />
            Filters ▼
          </button>

          <button className="add-business-button">
            <FaPlus className="icon" />
            {config.addBusinessButton}
          </button>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="team-table">
          <thead>
            <tr>
              {config.tableHeaders.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {businessData.map((item, index) => (
              <tr key={index}>
                <td>
                  <div className="business-id">
                    <div className="profile-icon">B</div>
                    <span>{item.businessId}</span>
                  </div>
                </td>
                <td>{item.businessName}</td>
                <td>{item.email}</td>
                <td>{item.businessType}</td>
                <td>{item.lastLogin}</td>
                <td>{item.joined}</td>
                <td>
                  <button
                    className="view-profile-button"
                    onClick={() => setSelectedProfile(item)}
                  >
                    {config.viewProfile}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedProfile && (
        <BusinessProfile
          data={selectedProfile}
          onClose={() => setSelectedProfile(null)}
        />
      )}
    </div>
  );
};

export default ClientManagementBusiness;
