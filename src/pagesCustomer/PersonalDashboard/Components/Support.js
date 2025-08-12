// Support.js
import React, { useState } from "react";
import "./Support.css";
import { FaComments, FaUser } from "react-icons/fa";
import supportBanner from "../../../assets/PersonalDashboard/support.png";
import FAQ from "./FAQ";
import LiveChat from "./LiveChat"; // <-- Import LiveChat

const Support = () => {
  const [showFAQ, setShowFAQ] = useState(false);
  const [showLiveChat, setShowLiveChat] = useState(false);

  if (showFAQ) return <FAQ onBack={() => setShowFAQ(false)} />;
  if (showLiveChat) return <LiveChat onBack={() => setShowLiveChat(false)} />;

  return (
    <div className="support-page">
      <header className="support-header">
        <div>
          <h2>We’re here to help with any queries or issues</h2>
          <p>Reach out for assistance anytime!</p>
        </div>
        <img
          src={supportBanner}
          alt="Support Banner"
          className="support-header-img"
        />
      </header>

      <div className="support-cards">
        <div className="support-card" onClick={() => setShowFAQ(true)}>
          <h3>Frequently Asked Questions</h3>
          <p>Find questions and answers related to Income Tax</p>
          <FaComments className="card-icon" />
        </div>

        <div className="support-card" onClick={() => setShowLiveChat(true)}>
          <h3>Live Chat</h3>
          <p>Chat with a support agent instantly</p>
          <FaUser className="card-icon" />
        </div>
      </div>
    </div>
  );
};

export default Support;
