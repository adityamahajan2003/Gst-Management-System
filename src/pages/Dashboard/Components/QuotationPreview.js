import React from "react";
import "./QuotationPreview.css";
import { FaDownload, FaRegSave, FaShareAlt, FaRegEye } from "react-icons/fa";

const QuotationPreview = ({ selectedColor, logoSrc }) => {
  const themeColor = selectedColor || "#453823";

  return (
    <div className="quotation-preview-page">
      <div className="quotation-preview-wrapper">
        {/* === Preview Header === */}
        <div className="preview-header">
          <h2 className="preview-title">
            <FaRegEye style={{ marginRight: "6px" }} />
            Preview
          </h2>
          <div className="preview-actions">
            <button className="action-btn">
              <FaRegSave /> Save
            </button>
            <button className="action-btn">
              <FaDownload /> Download PDF
            </button>
            <button className="action-btn">
              <FaShareAlt /> Share
            </button>
          </div>
        </div>
        <hr />

        {/* === Quotation Box === */}
        <div className="quotation-box">
          {/* Header */}
          <div className="quotation-header">
            <div className="company-details">
              <img src={logoSrc} alt="Company Logo" className="company-logo" />
              <div>
                <h2>ESPARSE MATRIX</h2>
                <p>(Address)</p>
                <p>(City)</p>
                <p>Phone Number - 987*******</p>
              </div>
            </div>
            <div className="quote-meta">
              <p><strong>Date:</strong> 24 May 2024</p>
              <p><strong>Quote #:</strong> 123456</p>
              <p><strong>Customer Name:</strong> Zoya Khan</p>
              <p><strong>Expiry Date:</strong> 24 June 2024</p>
            </div>
          </div>

          {/* Customer Info */}
          <div className="section-label" style={{ backgroundColor: themeColor }}>
            Customer
          </div>
          <div className="section-body">
            <p>Zoya Khan</p>
            <p>(Address)</p>
            <p>Phone Number - 9876******</p>
          </div>

          {/* Description */}
          <div className="section-label" style={{ backgroundColor: themeColor }}>
            Description
          </div>
          <table className="quotation-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Product Name</td>
                <td>2000rs</td>
                <td>2</td>
                <td>4000rs</td>
              </tr>
            </tbody>
          </table>

          {/* Totals */}
          <div className="totals-section">
            <p><strong>Sub Total:</strong> 4000rs</p>
            <p><strong>Discount -10%:</strong> 400rs</p>
            <p><strong>Taxable Value:</strong> 3960rs</p>
            <p><strong>Add IGST:</strong> xxxxx</p>
            <p className="grand-total"><strong>Grand Total:</strong> xxxxx</p>
          </div>

          {/* Convert to Invoice Button */}
          <button className="convert-btn">
            Convert to Invoice
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuotationPreview;
