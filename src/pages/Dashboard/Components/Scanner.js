import React, { useState } from "react";
import "./Scanner.css";

const Scanner = () => {
  const [activeTab, setActiveTab] = useState("invoice");

  const handleScanClick = () => {
    alert("Scanning invoice...");
  };

  return (
    <div className="scanner-container">
      <div className="scanner-tabs">
        <button
          className={activeTab === "invoice" ? "active" : ""}
          onClick={() => setActiveTab("invoice")}
        >
          Scan invoice
        </button>
        <button
          className={activeTab === "signature" ? "active" : ""}
          onClick={() => setActiveTab("signature")}
        >
          Digital signature
        </button>
      </div>

      <div className="scanner-box">
        <div className="scanner-frame" />
        <button className="scan-button" onClick={handleScanClick}>
          Scan
        </button>
      </div>
    </div>
  );
};

export default Scanner;
