import React, { useEffect, useState } from "react";
import quotationData from "../../../Config/quotations.json";
import InvoiceManagement from "./InvoiceManagement";
import "./QuotationManagement.css";
import total from "../../../assets/Quotation/total.png";
import pending from "../../../assets/Quotation/pending.png";
import accepted from "../../../assets/Quotation/accepted.png";
import { FaSlidersH, FaPlus } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";

const QuotationManagement = ({ onCreate }) => {
  const [quotations, setQuotations] = useState([]);
  const [activeTab, setActiveTab] = useState("Quotation");

  useEffect(() => {
    setQuotations(quotationData);
  }, []);

  return (
    <div className="quotation-container">
      {/* Tabs */}
      <div className="quotation-tabs">
        <div className="tab-switch">
          <button
            className={`tab-button ${activeTab === "Quotation" ? "active" : ""}`}
            onClick={() => setActiveTab("Quotation")}
          >
            Quotation
          </button>
          <button
            className={`tab-button ${activeTab === "Invoice" ? "active" : ""}`}
            onClick={() => setActiveTab("Invoice")}
          >
            Invoice
          </button>
        </div>
      </div>

      {activeTab === "Quotation" && (
        <>
          <div className="summary-boxes">
            <div className="summary total">
              <img src={total} alt="Total" className="summary-icon" />
              <div>
                <p>Total Quotation</p>
                <h3>{quotations.length}</h3>
              </div>
            </div>
            <div className="summary pending">
              <img src={pending} alt="Pending" className="summary-icon" />
              <div>
                <p>Pending Quotation</p>
                <h3>
                  {quotations.filter((q) => q.status === "Pending").length}
                </h3>
              </div>
            </div>
            <div className="summary accepted">
              <img src={accepted} alt="Accepted" className="summary-icon" />
              <div>
                <p>Accepted Quotation</p>
                <h3>
                  {quotations.filter((q) => q.status === "Accepted").length}
                </h3>
              </div>
            </div>
          </div>

          <div className="quotation-header">
            <h2>Quotation</h2>
            <div className="actions">
              <button className="filter-btn">
                <FaSlidersH className="icon" />
                Filters ▼
              </button>
              <button className="convert">
                <HiOutlineDocumentText className="icon" />
                Convert to Invoice
              </button>
              <button className="create" onClick={onCreate}>
                <FaPlus className="icon" />
                Create
              </button>
            </div>
          </div>

          <table className="quotation-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Quotation No.</th>
                <th>Issue Date</th>
                <th>Due Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {quotations.map((q) => (
                <tr key={q.id}>
                  <td>
                    <div className="quotation-avatar-name">
                      <img
                        className="quotation-avatar"
                        src={q.avatar}
                        alt="avatar"
                      />
                      <span>{q.name}</span>
                    </div>
                  </td>
                  <td>{q.quotationNo}</td>
                  <td>{q.issueDate}</td>
                  <td>{q.dueDate}</td>
                  <td>{q.amount}</td>
                  <td>
                    <span className={`status ${q.status.toLowerCase()}`}>
                      {q.status}
                    </span>
                  </td>
                  <td>✏️ 📤 🗑</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {activeTab === "Invoice" && <InvoiceManagement onCreate={onCreate} />}
    </div>
  );
};

export default QuotationManagement;
