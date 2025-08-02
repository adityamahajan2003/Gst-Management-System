import React, { useState } from "react";
import "./InvoiceMaker.css";

const InvoiceMaker = () => {
  const [client, setClient] = useState({
    name: "Zoya Khan",
    email: "zoyakhan0234@gmail.com",
    phone: "9876******",
    address: "xxxxxxxxxxxxxx",
    gst: "xxxxxxxxxxxxxx",
  });

  const [items, setItems] = useState([
    { name: "Product Name", price: 2000, quantity: 2 },
    { name: "Product Name", price: 1000, quantity: 5 },
  ]);

  const [discountPercent, setDiscountPercent] = useState(10);
  const [taxPercent, setTaxPercent] = useState(0);
  const [issueDate, setIssueDate] = useState("2024-05-24");
  const [expiryDate, setExpiryDate] = useState("2024-06-24");

  const [invoiceDetails, setInvoiceDetails] = useState({
    invoiceNumber: "",
    orderNumber: "",
    paymentMethod: "",
  });

  const addItem = () => {
    setItems([...items, { name: "", price: 0, quantity: 1 }]);
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const updateItem = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] =
      field === "price" || field === "quantity" ? parseFloat(value) : value;
    setItems(updatedItems);
  };

  const handleClientChange = (field, value) => {
    setClient({ ...client, [field]: value });
  };

  const handleInvoiceDetailChange = (field, value) => {
    setInvoiceDetails({ ...invoiceDetails, [field]: value });
  };

  const subTotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discountAmount = (subTotal * discountPercent) / 100;
  const taxableValue = subTotal - discountAmount;
  const taxAmount = (taxableValue * taxPercent) / 100;
  const grandTotal = taxableValue + taxAmount;

  return (
    <div className="invoice-maker-container">
      <div className="main-grid">
        {/* Left Section */}
        <div className="left-panel">
          <h2 className="invoice-title">Create New Invoice</h2>

          <div className="avatar-container">
            <img src="/avatar.png" alt="Client" className="avatar" />
          </div>

          <div className="section-title">Client Details</div>

          <div className="inline-field">
            <label className="inline-label">
              Client Name<span className="required-asterisk">*</span>
            </label>
            <input
              className="input"
              value={client.name}
              onChange={(e) => handleClientChange("name", e.target.value)}
            />
          </div>

          <div className="inline-field">
            <label className="inline-label">
              Email<span className="required-asterisk">*</span>
            </label>
            <input
              className="input"
              value={client.email}
              onChange={(e) => handleClientChange("email", e.target.value)}
            />
          </div>

          <div className="inline-field">
            <label className="inline-label">
              Phone<span className="required-asterisk">*</span>
            </label>
            <input
              className="input"
              value={client.phone}
              onChange={(e) => handleClientChange("phone", e.target.value)}
            />
          </div>

          <div className="inline-field">
            <label className="inline-label">Address</label>
            <input
              className="input"
              value={client.address}
              onChange={(e) => handleClientChange("address", e.target.value)}
            />
          </div>

          <div className="inline-field">
            <label className="inline-label">GST No.</label>
            <input
              className="input"
              value={client.gst}
              onChange={(e) => handleClientChange("gst", e.target.value)}
            />
          </div>

          <div className="section-title">Product Details</div>

          <div className="product-header">
            <div>Item</div>
            <div>Unit Price</div>
            <div>Quantity</div>
            <div>Amount</div>
          </div>

          {items.map((item, index) => (
            <div key={index} className="product-item-row">
              <input
                className="input"
                value={item.name}
                onChange={(e) => updateItem(index, "name", e.target.value)}
              />
              <input
                type="number"
                className="input small-input"
                value={item.price}
                onChange={(e) => updateItem(index, "price", e.target.value)}
              />
              <input
                type="number"
                className="input small-input"
                value={item.quantity}
                onChange={(e) => updateItem(index, "quantity", e.target.value)}
              />
              <div className="amount-display">
                {item.price * item.quantity}rs
              </div>
              <button
                onClick={() => removeItem(index)}
                className="remove-button"
              >
                🗑️
              </button>
            </div>
          ))}

          <div className="product-footer">
            <button onClick={addItem} className="add-button">
              ➕ Add Item
            </button>
            <div className="inline-field">
              <label className="inline-label">Discount %</label>
              <input
                type="number"
                className="input small-input"
                value={discountPercent}
                onChange={(e) => setDiscountPercent(Number(e.target.value))}
              />
            </div>
          </div>

          <div className="section-title">Notes/Terms</div>
          <textarea
            className="notes-box"
            placeholder="Enter Note or Terms of Service"
          />
        </div>

        {/* Right Section */}
        <div className="right-panel">
          <div className="section-title">Invoice Detail</div>

          <div className="inline-field">
            <label className="inline-label">
              Invoice Number<span className="required-asterisk">*</span>
            </label>
            <input
              className="input"
              placeholder="Invoice Number"
              value={invoiceDetails.invoiceNumber}
              onChange={(e) =>
                handleInvoiceDetailChange("invoiceNumber", e.target.value)
              }
            />
          </div>

          <div className="inline-field">
            <label className="inline-label">
              Order Number<span className="required-asterisk">*</span>
            </label>
            <input
              className="input"
              placeholder="Order Number"
              value={invoiceDetails.orderNumber}
              onChange={(e) =>
                handleInvoiceDetailChange("orderNumber", e.target.value)
              }
            />
          </div>

          <div className="inline-field">
            <label className="inline-label">
              Payment Method<span className="required-asterisk">*</span>
            </label>
            <input
              className="input"
              placeholder="Payment Method"
              value={invoiceDetails.paymentMethod}
              onChange={(e) =>
                handleInvoiceDetailChange("paymentMethod", e.target.value)
              }
            />
          </div>

          <div className="inline-field">
            <label className="inline-label">
              Issued Date<span className="required-asterisk">*</span>
            </label>
            <input
              type="date"
              className="input"
              value={issueDate}
              onChange={(e) => setIssueDate(e.target.value)}
            />
          </div>

          <div className="inline-field">
            <label className="inline-label">
              Expiry Date<span className="required-asterisk">*</span>
            </label>
            <input
              type="date"
              className="input"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
          </div>

          <div className="tax-section">
            <label>Tax</label>
            <select className="input small-input">
              <option>Select</option>
              <option>GST</option>
              <option>IGST</option>
            </select>
            <label>Percent</label>
            <input
              className="input small-input"
              placeholder="xx%"
              type="number"
              value={taxPercent}
              onChange={(e) => setTaxPercent(Number(e.target.value))}
            />
          </div>

          <label className="checkbox-label">
            <input type="checkbox" /> Additional Charges
          </label>

          <div className="summary-box">
            <div>Sub Total: {subTotal}rs</div>
            <div>
              Discount -{discountPercent}%: {discountAmount.toFixed(2)}rs
            </div>
            <div>Taxable Value: {taxableValue.toFixed(2)}rs</div>
            <div>Add IGST: {taxAmount.toFixed(2)}rs</div>
            <div className="grand-total">
              Grand Total: {grandTotal.toFixed(2)}rs
            </div>
          </div>
        </div>
      </div>

      <div className="button-wrapper">
        <button className="generate-button">Generate Invoice 🧾</button>
      </div>
    </div>
  );
};

export default InvoiceMaker;
