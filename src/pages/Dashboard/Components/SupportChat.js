import React, { useState } from "react";
import "./SupportChat.css";
import SupportProfile from "./SupportProfile";

const SupportChat = () => {
  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => {
    setShowProfile(prev => !prev);
  };

  return (
    <div className="support-chat-wrapper">
      <div className="support-chat-container">
        {/* Sidebar */}
        <div className="messages-sidebar">
          <h3>Messages</h3>
          {[...Array(10)].map((_, i) => (
            <div key={i} className="message-user">
              <img src="/avatar.jpg" alt="avatar" className="avatar" />
              <div className="msg-details">
                <div className="name-row">
                  <strong>Shubham Sharma</strong>
                  <span className="time">15 min</span>
                </div>
                <span className="need-help">Need help</span>
              </div>
            </div>
          ))}
        </div>

        {/* Chat box */}
        <div className="chat-box">
          {/* Header */}
          <div className="chat-header">
            <div className="user-info" onClick={toggleProfile} style={{ cursor: "pointer" }}>
              <img src="/avatar.jpg" alt="avatar" className="avatar" />
              <div>
                <strong>Shubham Sharma</strong>
                <p className="online-status">Online</p>
              </div>
            </div>
            <div className="chat-icons">
              <i className="fa fa-phone" />
              <i className="fa fa-video-camera" />
              <i className="fa fa-ellipsis-h" />
            </div>
          </div>

          {/* Body */}
          <div className="chat-body">
            <div className="chat-msg left">
              <p>Hey do you have a moment ?</p>
              <p className="time">12:15 am</p>
            </div>
            <div className="chat-msg left">
              <p>
                Lorem ipsum dolor sit amet consectetur. Feugiat elit sit ut
                egestas cras morbi consequat sollicitudin. Dictum eget mattis
                potenti neque quis volutpat duis. Odio mi velit pretium sem in.
                Iaculis vitae sed justo leo felis.
              </p>
              <p className="time">12:15 am</p>
            </div>

            <div className="chat-msg right">
              <p>Hey</p>
            </div>
            <div className="chat-msg right">
              <p>
                Lorem ipsum dolor sit amet consectetur. Feugiat elit sit ut
                egestas cras morbi consequat sollicitudin.
              </p>
              <p className="time">12:15 am</p>
            </div>
          </div>

          {/* Input */}
          <div className="chat-input">
            <div className="input-left">
              <i className="fa fa-paperclip" />
            </div>
            <input type="text" placeholder="Type here..." />
            <div className="input-right">
              <i className="fa fa-inr" />
              <i className="fa fa-microphone" />
              <i className="fa fa-paper-plane" />
            </div>
          </div>
        </div>

        {/* Profile modal */}
        {showProfile && <SupportProfile onClose={toggleProfile} />}
      </div>
    </div>
  );
};

export default SupportChat;
