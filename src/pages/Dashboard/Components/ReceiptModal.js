import React, { useState, useEffect } from "react";
import "./ReceiptModal.css";

const ReceiptModal = ({ payment, onClose }) => {
  const [formData, setFormData] = useState({
    paymentId: "",
    transactionId: "",
    paymentDate: "",
    paymentTime: "",
    amount: "",
    paymentMethod: "",
    payerName: "",
    payerEmail: "",
    gstNumber: "",
  });

  useEffect(() => {
    if (payment) {
      setFormData({
        paymentId: payment.paymentId || "",
        transactionId: payment.transactionId || "xxxxxxxxxxxxx",
        paymentDate: payment.paymentDate || "",
        paymentTime: "xx pm", // Placeholder
        amount: payment.amount || "",
        paymentMethod: payment.paymentMethod || "",
        payerName: "xxxxxxxxxxxx",
        payerEmail: "xxxxxxxxxxxx",
        gstNumber: payment.gstNumber || "",
      });
    }
  }, [payment]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (!payment) return null;

  return (
    <div className="receipt-modal-overlay">
      <div className="receipt-modal">
        <button className="close-btn" onClick={onClose}>✕</button>
        <h4 className="section-title">Payment Information</h4>

        <div className="form-grid">
          <div className="form-row">
            <label>Payment Id</label>
            <input name="paymentId" value={formData.paymentId} onChange={handleChange} />
          </div>

          <div className="form-row">
            <label>Transaction Id</label>
            <input name="transactionId" value={formData.transactionId} onChange={handleChange} />
          </div>

          <div className="form-row">
            <label>Date</label>
            <input name="paymentDate" value={formData.paymentDate} onChange={handleChange} />
          </div>

          <div className="form-row">
            <label>Time</label>
            <input name="paymentTime" value={formData.paymentTime} onChange={handleChange} />
          </div>

          <div className="form-row">
            <label>Amount Paid</label>
            <input name="amount" value={formData.amount} onChange={handleChange} />
          </div>

          <div className="form-row">
            <label>Payment Method</label>
            <input name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} />
          </div>
        </div>

        <h4 className="section-title muted">Payer Information</h4>

        <div className="form-grid">
          <div className="form-row">
            <label>Name</label>
            <input name="payerName" value={formData.payerName} onChange={handleChange} />
          </div>

          <div className="form-row">
            <label>Email</label>
            <input name="payerEmail" value={formData.payerEmail} onChange={handleChange} />
          </div>

          <div className="form-row">
            <label>Gst Number</label>
            <input name="gstNumber" value={formData.gstNumber} onChange={handleChange} />
          </div>
        </div>

        <div className="modal-footer">
          <span className="status-pill paid">● Paid</span>
          <button className="generate-receipt-btn">
            🧾 Generate Receipt
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReceiptModal;
