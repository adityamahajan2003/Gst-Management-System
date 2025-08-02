import React, { useEffect, useState } from "react";
import invoiceData from "../../../Config/invoices.json";
import "./QuotationManagement.css"; // Shared CSS
import total from "../../../assets/Quotation/total.png";
import pending from "../../../assets/Quotation/pending.png";
import accepted from "../../../assets/Quotation/accepted.png";
import Scanner from "./Scanner";
import InvoiceMaker from "./InvoiceMaker";
import { FaSlidersH, FaPlus } from "react-icons/fa";
import { TbScan } from "react-icons/tb";
import { FiUpload } from "react-icons/fi";


const InvoiceManagement = ({ onCreate }) => {
  const [invoices, setInvoices] = useState([]);
  const [showScanner, setShowScanner] = useState(false);
  const [showInvoiceMaker, setShowInvoiceMaker] = useState(false);

  useEffect(() => {
    setInvoices(invoiceData);
  }, []);

  const handleCreate = () => setShowInvoiceMaker(true);
  const handleBack = () => setShowInvoiceMaker(false);

  if (showInvoiceMaker) return <InvoiceMaker onBack={handleBack} />;

  return (
    <>
      <div className="summary-boxes">
        <div className="summary total">
          <img src={total} alt="Total Invoice" className="summary-icon" />
          <div>
            <p>Total Invoice</p>
            <h3>{invoices.length}</h3>
          </div>
        </div>
        <div className="summary pending">
          <img src={pending} alt="Pending Invoice" className="summary-icon" />
          <div>
            <p>Pending Invoice</p>
            <h3>{invoices.filter((i) => i.status === "Unpaid").length}</h3>
          </div>
        </div>
        <div className="summary accepted">
          <img src={accepted} alt="Accepted Invoice" className="summary-icon" />
          <div>
            <p>Accepted Invoice</p>
            <h3>{invoices.filter((i) => i.status === "Paid").length}</h3>
          </div>
        </div>
      </div>

      <div className="quotation-header">
        <h2>Invoice</h2>
        <div className="actions">
          <button className="filter-btn"><FaSlidersH className="icon" />Filters ▼</button>
          <button className="convert" onClick={() => setShowScanner(true)}>
            <TbScan className="icon" />
            Scan Invoice
          </button>
          <button className="convert">
            Upload Invoice 
            <FiUpload className="icon" />
            </button>
          <button className="create" onClick={handleCreate}>
            <FaPlus className="icon" />
            Create
            </button>
        </div>
      </div>

      <table className="quotation-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Invoice ID</th>
            <th>Date</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id}>
              <td>
                <div className="quotation-avatar-name">
                  <img className="quotation-avatar" src={invoice.avatar} alt="avatar" />
                  <span>{invoice.name}</span>
                </div>
              </td>
              <td>{invoice.invoiceId}</td>
              <td>{invoice.date}</td>
              <td>{invoice.type}</td>
              <td>{invoice.amount}</td>
              <td>
                <span className={`status ${invoice.status.toLowerCase()}`}>
                  {invoice.status}
                </span>
              </td>
              <td>✏️ 📤 🗑</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showScanner && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setShowScanner(false)}>×</button>
            <Scanner />
          </div>
        </div>
      )}
    </>
  );
};

export default InvoiceManagement;
