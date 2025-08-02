import React from "react";
import "./Topbar.css";
import Logo from "./Logo";
import search from "../assets/Topbar/search.png";
import viewreport from "../assets/Topbar/viewreport.png";
import notification from "../assets/Topbar/notification.png";
import message from "../assets/Topbar/message.png";

const Topbar = ({ showSearch = true, showBack = false, onBackClick, backLabel = "Back" }) => {
  return (
    <header className="topbar">
      <div className="logo-back-container">
        <Logo />
        {showBack && (
          <button className="back-button-topbar" onClick={onBackClick}>
            &larr; {backLabel}
          </button>
        )}
      </div>

      {showSearch && !showBack && (
        <div className="search-bar">
          <img src={search} alt="Search" className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
      )}

      <div className="icons">
        <img src={notification} alt="Notification" className="icon-img" />
        <img src={message} alt="Message" className="icon-img" />
        <button className="report-btn">
          <img src={viewreport} alt="View Report" className="report-icon" />
          View Report
        </button>
      </div>
    </header>
  );
};

export default Topbar;
