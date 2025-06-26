import React from "react";
import requests from "../../Config/Request.json";
import "./Requests.css"; 

const Requests = ({ goBack }) => {
  return (
    <div className="requests-container">
      <div className="requests-header">
        <button className="back-button" onClick={goBack}>
          &lt; Back
        </button>
        <h2>Requests ({requests.length})</h2>
      </div>

      <table className="requests-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Designation</th>
            <th>Consultation Topic</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((req, index) => (
            <tr key={index}>
              <td className="name-cell">
                <div className="profile-circle"></div>
                {req.name}
              </td>
              <td>{req.gender}</td>
              <td>{req.designation}</td>
              <td>{req.consultationTopic}</td>
              <td>
                <button className="accept-btn">● Accept</button>
                <button className="decline-btn">● Decline</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Requests;
