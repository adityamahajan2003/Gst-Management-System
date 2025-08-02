import React, { useEffect, useState } from "react";
import documentData from "../../../Config/documentData.json";
import {
  FaEye,
  FaEdit,
  FaShareAlt,
  FaTrash,
  FaSlidersH,
  FaUpload,
} from "react-icons/fa";
import "./DocumentManagement.css";

const DocumentManagement = () => {
  const [documents, setDocuments] = useState([]);
  const [activeTab, setActiveTab] = useState("View all");

  useEffect(() => {
    setDocuments(documentData);
  }, []);

  const getTypeClass = (type) => {
    return type.toLowerCase();
  };

  const parseSize = (sizeStr) => {
    const [value, unit] = sizeStr.split(" ");
    const val = parseFloat(value);
    if (!val || !unit) return 0;

    switch (unit.toLowerCase()) {
      case "kb":
        return val / 1024;
      case "mb":
        return val;
      case "gb":
        return val * 1024;
      default:
        return 0;
    }
  };

  const totalUsedMB = documents.reduce(
    (sum, doc) => sum + parseSize(doc.size),
    0
  );
  const totalCapacityGB = 978;
  const usedGB = (totalUsedMB / 1024).toFixed(1);

  const tabOptions = ["View all", "Documents", "Media Files", "PDFs"];

  return (
    <div className="document-management">
      <div className="storage-box">
        <h3>
          📄 {usedGB} GB <span>used from {totalCapacityGB} GB</span>
        </h3>
        <div className="bar">
          <div className="brown" style={{ width: "60%" }}></div>
          <div className="purple" style={{ width: "25%" }}></div>
          <div className="green" style={{ width: "15%" }}></div>
        </div>
        <div className="legend">
          <span>
            <span className="dot brown" /> Others
          </span>
          <span>
            <span className="dot purple" /> Spread Sheet
          </span>
          <span>
            <span className="dot green" /> Others
          </span>
        </div>
      </div>

      <h2>All Files</h2>
      <div className="filters-tabs">
        <div className="tabs">
          {tabOptions.map((tab) => (
            <button
              key={tab}
              className={`tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="filter-export">
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

      <table className="doc-table">
        <thead>
          <tr>
            <th>File Name</th>
            <th>Document Type</th>
            <th>Size</th>
            <th>Uploaded Date</th>
            <th>Owner</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc, index) => (
            <tr key={index}>
              <td>
                <span className="file-icon">📄</span> {doc.fileName}
              </td>
              <td>
                <span className={`tag ${getTypeClass(doc.type)}`}>
                  {doc.type}
                </span>
              </td>
              <td>{doc.size}</td>
              <td>{doc.uploadedDate}</td>
              <td className="owner-cell">
                <img
                  className="owner-avatar"
                  src={doc.avatarUrl || "/default-avatar.png"}
                  alt="avatar"
                />
                {doc.owner}
              </td>
              <td className="actions">
                <FaEye title="View" />
                <FaEdit title="Edit" />
                <FaShareAlt title="Share" />
                <FaTrash title="Delete" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DocumentManagement;
