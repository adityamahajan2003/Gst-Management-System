// LiveChat.js
import React from "react";
import "./LiveChat.css";
import { FaUser, FaMicrophone, FaPaperPlane, FaRupeeSign } from "react-icons/fa";

const LiveChat = ({ onBack }) => {
  return (
    <div className="livechat-container">
      <div className="livechat-header">
        <button className="back-button" onClick={onBack}>
          ← Back
        </button>
        <div className="agent-info">
          <div className="agent-avatar">
            <FaUser />
          </div>
          <div>
            <h4>Support</h4>
            <p className="online-status">Online</p>
          </div>
        </div>
        <button className="close-button">×</button>
      </div>

      <div className="chat-body">
        <div className="message other">
          <div className="text">Hey</div>
        </div>

        <div className="message other">
          <div className="text">
            Lorem ipsum dolor sit amet consectetur. Feugiat elit sit ut egestas
            cras morbi consequat sollicitudin.
          </div>
          <span className="time">12:15 am</span>
        </div>

        <div className="message user">
          <div className="text">
            Lorem ipsum dolor sit amet consectetur. Feugiat elit sit ut egestas
            cras morbi consequat sollicitudin.
          </div>
        </div>

        <div className="message user">
          <div className="text">
            Lorem ipsum dolor sit amet consectetur. Feugiat elit sit ut egestas
            cras morbi consequat
          </div>
          <div className="time user-time">12:15 am</div>
        </div>
      </div>

      <div className="chat-input-area">
        <FaUser className="input-icon" />
        <input type="text" placeholder="Type here..." />
        <FaRupeeSign className="action-icon" />
        <FaMicrophone className="action-icon" />
        <FaPaperPlane className="action-icon" />
      </div>
    </div>
  );
};

export default LiveChat;
