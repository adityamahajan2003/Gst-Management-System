import React, { useState } from "react";
import "./CreateQuotation.css";
import QuotationPreview from "./QuotationPreview";
import logo from "../../../assets/Quotation/clogo.png";

const CreateQuotation = ({ onClose }) => {
  const [selectedColor, setSelectedColor] = useState(0);
  const [showStylePreview, setShowStylePreview] = useState(false);

  const layoutColors = ["#762c48", "#635234", "#b78af1", "#4a4a4a"];

  const handlePrevColor = () => {
    setSelectedColor((prev) =>
      prev === 0 ? layoutColors.length - 1 : prev - 1
    );
  };

  const handleNextColor = () => {
    setSelectedColor((prev) => (prev + 1) % layoutColors.length);
  };

  return (
    <div className="create-quotation-wrapper">
      <div className="create-quotation-container">
        <div className="quotation-form-section">
          <h3>Create New Quotation</h3>
          <img
            src="https://via.placeholder.com/80"
            alt="avatar"
            className="avatar"
          />
          <form className="quotation-form">
            <fieldset>
              <legend>Client Personal Info</legend>
              <label>
                <span>Name:</span>
                <input type="text" defaultValue="Zoya Khan" />
              </label>
              <label>
                <span>Email Id:</span>
                <input type="email" defaultValue="zoyakhan0234@gmail.com" />
              </label>
              <label>
                <span>Ph. Number:</span>
                <input type="text" defaultValue="9876******" />
              </label>
              <label>
                <span>Address:</span>
                <input type="text" defaultValue="xxxxxxxxxxxxx" />
              </label>
            </fieldset>

            <fieldset>
              <legend>Quotation Detail</legend>
              <label>
                <span>Quotation No:</span>
                <input type="text" defaultValue="123456" />
              </label>
              <div className="date-row">
                <label>
                  <span>Issued Date:</span>
                  <input type="date" defaultValue="2024-05-24" />
                </label>
                <label>
                  <span>Expiry Date:</span>
                  <input type="date" defaultValue="2024-06-24" />
                </label>
              </div>
            </fieldset>

            <fieldset>
              <legend>Product Description</legend>

              <div className="product-description-header product-description-grid">
                <span>Item</span>
                <span>Unit Price</span>
                <span>Quantity</span>
                <span>Amount</span>
                <span></span>
              </div>

              <div className="product-description-grid">
                <input type="text" defaultValue="Product Name" />
                <input type="text" defaultValue="2000rs" />
                <input type="number" defaultValue={2} min={1} />
                <input type="text" defaultValue="4000rs" />
                <button type="button" className="delete-row">
                  🗑
                </button>
              </div>

              <div className="action-row">
                <button className="add-item-btn" type="button">➕ Add Item</button>

                <label className="checkbox-label">
                  <input type="checkbox" />
                  Add Discount
                </label>
              </div>

              <div className="tax-row">
                <label>
                  <span>Tax</span>
                  <select>
                    <option>IGST</option>
                    <option>CGST</option>
                    <option>SGST</option>
                  </select>
                </label>
                <label>
                  <span>Percent</span>
                  <input type="text" placeholder="xx%" />
                </label>
              </div>

              <label className="checkbox-label additional-charge">
                <input type="checkbox" />
                <span>Additional Charges</span>
              </label>
            </fieldset>

            <div className="form-buttons">
              <button type="button" className="cancel-btn" onClick={onClose}>
                Cancel
              </button>
              <button
                type="button"
                className="preview-btn"
                onClick={() => setShowStylePreview(true)}
              >
                Preview
              </button>
            </div>
          </form>
        </div>

        {!showStylePreview ? (
          <div className="quotation-style-section">
            <h2>Quotation Style</h2>
            <p>Choose a Template</p>
            <div className="template">
              <button className="nav-arrow" onClick={handlePrevColor}>
                ◀
              </button>
              <div
                className="template-preview"
                style={{ backgroundColor: layoutColors[selectedColor] }}
              />
              <button className="nav-arrow" onClick={handleNextColor}>
                ▶
              </button>
            </div>
            <div className="color-options">
              {layoutColors.map((color, idx) => (
                <div
                  key={idx}
                  className={`color-dot ${
                    selectedColor === idx ? "selected" : ""
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(idx)}
                />
              ))}
            </div>
            <button
              className="preview-btn"
              style={{ marginTop: "20px" }}
              onClick={() => setShowStylePreview(true)}
            >
              Save
            </button>
          </div>
        ) : (
          <QuotationPreview
            selectedColor={layoutColors[selectedColor]}
            logoSrc={logo}
            onBack={() => setShowStylePreview(false)}
          />
        )}
      </div>
    </div>
  );
};

export default CreateQuotation;
