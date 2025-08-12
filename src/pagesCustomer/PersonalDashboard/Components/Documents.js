import React, { useState } from "react";
import "./Documents.css";
import {
  FaEye,
  FaDownload,
  FaShareAlt,
  FaTrashAlt,
  FaSlidersH,
  FaUpload,
} from "react-icons/fa";

const files = new Array(9).fill({
  name: "Abc-defghijkl",
  size: "1.2 Mb",
  date: "28 July 2024",
  sender: "CA Anuj Verma",
});

const tabOptions = ["View all", "Documents", "Media Files", "PDFs"];

const Documents = () => {
  const [activeTab, setActiveTab] = useState("View all");

  return (
    <div className="documents-container">
      <h2 className="heading">All Files</h2>

      {/* Combined filter and actions bar */}
      <div className="top-bar">
        <div className="filter-buttons">
          {tabOptions.map((label) => (
            <button
              key={label}
              className={`filter-tab ${activeTab === label ? "active" : ""}`}
              onClick={() => setActiveTab(label)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="actions-bar">
          <button className="filter-btn">
            <FaSlidersH className="icon" />
            Filters ▼
          </button>
          <button className="export-btn">
            <FaUpload className="icon" />
            Export
          </button>
        </div>
      </div>

      <table className="files-table">
        <thead>
          <tr>
            <th>File Name</th>
            <th>Size</th>
            <th>Date</th>
            <th>Send By</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, idx) => (
            <tr key={idx}>
              <td>
                <div className="filename-cell">
                  <span className="file-icon">📄</span>
                  {file.name}
                </div>
              </td>
              <td>{file.size}</td>
              <td>{file.date}</td>
              <td>
                <div className="sender-cell">
                  <span className="avatar-placeholder" />
                  {file.sender}
                </div>
              </td>
              <td>
                <div className="action-icons">
                  <FaEye className="icon" />
                  <FaDownload className="icon" />
                  <FaShareAlt className="icon" />
                  <FaTrashAlt className="icon" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Documents;
