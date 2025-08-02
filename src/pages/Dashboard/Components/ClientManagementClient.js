import React, { useState, useEffect } from "react";
import "./ClientManagementClient.css";
import clientData from "../../../Config/clientmanagementclient.json";
import ClientProfile from "./ClientProfile";
import { FaSlidersH, FaPlus } from "react-icons/fa";

export default function ClientManagementClient({ setSelectedClientTab }) {
  const [teamMembers, setTeamMembers] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);

  useEffect(() => {
    setTeamMembers(clientData.team_members || []);
  }, []);

  return (
    <div className="client-management-container">
      <div className="client-tabs">
        <button
          className="client-tab"
          onClick={() => setSelectedClientTab("Business")}
        >
          Business
        </button>
        <button
          className="client-tab active"
          onClick={() => setSelectedClientTab("Client")}
        >
          Client
        </button>
      </div>

      <div className="header-section">
        <h2 className="heading">Team members</h2>
        <div className="actions">
          <button className="client-filter-btn">
            <FaSlidersH className="icon" />
            Filters ▼
          </button>
          <button className="add-business-button">
            <FaPlus className="icon" />
            Add User
          </button>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="team-table">
          <thead>
            <tr>
              <th>User Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Designation</th>
              <th>Last Login</th>
              <th>Joined</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {teamMembers.length === 0 ? (
              <tr>
                <td
                  colSpan="7"
                  style={{ textAlign: "center", padding: "1rem" }}
                >
                  No team members found.
                </td>
              </tr>
            ) : (
              teamMembers.map((member, index) => (
                <tr key={index}>
                  <td>
                    <div className="business-id">
                      <div className="profile-icon">C</div>
                      <span>{member.userId}</span>
                    </div>
                  </td>
                  <td>{member.name}</td>
                  <td>{member.email}</td>
                  <td>{member.designation}</td>
                  <td>{member.lastLogin}</td>
                  <td>{member.joined}</td>
                  <td>
                    <button
                      className="view-profile-button"
                      onClick={() => setSelectedClient(member)}
                    >
                      View Profile
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {selectedClient && (
        <ClientProfile
          data={selectedClient}
          onClose={() => setSelectedClient(null)}
        />
      )}
    </div>
  );
}
