import React from 'react';
import './ConsultPage.css';
import profileImg from "../../../assets/PersonalDashboard/profileImg.png"; 

const ConsultPage = ({ consultant, onClose }) => {
  return (
    <div className="consult-container">
      {/* Sidebar */}
      <div className="consult-sidebar">
        <button className="back-btn" onClick={onClose}>← Back</button>
        <img src={profileImg} alt={consultant.name} className="consult-avatar" />
        <h2 className="consult-name">{consultant.name}</h2>
        <p className="consult-handle">{consultant.handle}</p>

        <div className="consult-info">
          <p><strong>Bio:</strong><br />{consultant.specialization}</p>
          <p><strong>Certifications:</strong><br />{consultant.certifications}</p>
          <p><strong>Consultation Fee:</strong><br />{consultant.fee}</p>
          <p><strong>Language:</strong><br />{consultant.languages.join(', ')}</p>
        </div>
      </div>

      {/* Chat Section */}
      <div className="consult-chat">
        <div className="chat-header">
          <div className="chat-user">
            <img src={profileImg} alt={consultant.name} className="avatar-small" />
            <div>
              <h4>{consultant.name}</h4>
              <span className="online-status">Online</span>
            </div>
          </div>
          <div className="chat-actions">📞 🎥 ⋮</div>
        </div>

        <div className="chat-messages">
          <div className="msg-right">
            <p>Hey</p>
            <span>12:15 am</span>
          </div>
          <div className="msg-left">
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="msg-left payment-box">
            <p>Amount ₹10,000</p>
            <button className="pay-button">Pay</button>
            <span>12:15 am</span>
          </div>
        </div>

        <div className="chat-input">
          <input type="text" placeholder="Type here..." />
          <button>➤</button>
        </div>
      </div>
    </div>
  );
};

export default ConsultPage;
