import React from "react";
import "./SupportProfile.css";

const SupportProfile = ({ onClose }) => {
  return (
    <div className="profile-modal-overlay" onClick={onClose}>
      <div className="profile-modal" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>

        {/* Profile Avatar & Name */}
        <img src="/avatar.jpg" alt="avatar" className="profile-avatar" />
        <h3 className="profile-name">Shubham Sharma</h3>

        {/* Actions */}
        <div className="profile-actions">
          <div className="profile-icon" title="Audio">
            <i className="fa fa-phone" />
            <p>Audio</p>
          </div>
          <div className="profile-icon" title="Video">
            <i className="fa fa-video-camera" />
            <p>Video</p>
          </div>
          <div className="profile-icon" title="Search">
            <i className="fa fa-search" />
            <p>Search</p>
          </div>
        </div>

        {/* Media and Docs Section */}
        <div className="media-section">
          <div className="media-header">
            <span>Media and Docs</span>
            <span className="media-count">10</span>
          </div>
          <div className="media-thumbnails">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="media-thumb">
                <img src="/placeholder.jpg" alt="media" />
              </div>
            ))}
          </div>
        </div>

        {/* Options */}
        <div className="profile-options">
          <p className="option report">
            <i className="fa fa-flag" /> Report
          </p>
          <p className="option block">
            <i className="fa fa-ban" /> Block
          </p>
          <p className="option delete">
            <i className="fa fa-trash" /> Delete
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupportProfile;
