import React, { useState } from "react";
import payments from "../../../Config/payments.json";
import paymentHistory from "../../../Config/paymentsHistory.json";
import total from "../../../assets/Payment/total.png";
import pending from "../../../assets/Payment/pending.png";
import completed from "../../../assets/Payment/completed.png";
import ReceiptModal from "./ReceiptModal";
import PaymentHistoryModal from "./PaymentHistoryModal";
import "./PaymentPage.css";
import { FaSlidersH } from "react-icons/fa";

const PaymentPage = () => {
  const [showReceipt, setShowReceipt] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [showHistory, setShowHistory] = useState(false);

  const handleGenerateReceipt = (payment) => {
    setSelectedPayment(payment);
    setShowReceipt(true);
  };

  const handleCloseModal = () => {
    setShowReceipt(false);
    setSelectedPayment(null);
  };

  return (
    <div className="panel-container">
      {!showHistory ? (
        <>
          <div className="payment-header">
            <h2>Payment Overview</h2>
            <button
              className="view-history-btn"
              onClick={() => setShowHistory(true)}
            >
              View History
            </button>
          </div>

          <div className="overview">
            <div className="box total">
              <img src={total} alt="Total" className="box-icon" />
              <div>
                <h3>Total Payment</h3>
                <h3>XXXXXX</h3>
              </div>
            </div>
            <div className="box pending">
              <img src={pending} alt="Pending" className="box-icon" />
              <div>
                <h3>Pending Payment</h3>
                <h3>XXXXXX</h3>
              </div>
            </div>
            <div className="box completed">
              <img src={completed} alt="Completed" className="box-icon" />
              <div>
                <h3>Completed Payment</h3>
                <h3>XXXXXX</h3>
              </div>
            </div>
          </div>

          <div className="table-section">
            <div className="table-header">
              <h3>Recent Payments</h3>
              <div className="actions">
                <button className="filter-btn">
                  <FaSlidersH className="icon" />
                  Filters ▼
                </button>
                <button
                  className="generate-btn"
                  onClick={() => handleGenerateReceipt(payments[0])}
                >
                  🧾 Generate Receipt
                </button>
              </div>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Payment ID</th>
                  <th>GST Number</th>
                  <th>Payment Date</th>
                  <th>Amount</th>
                  <th>Payment Method</th>
                  <th>Transaction ID</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((item, index) => (
                  <tr key={index}>
                    <td>{item.paymentId}</td>
                    <td>{item.gstNumber}</td>
                    <td>{item.paymentDate}</td>
                    <td>{item.amount}</td>
                    <td>{item.paymentMethod}</td>
                    <td>{item.transactionId}</td>
                    <td>
                      <span className={`status ${item.status.toLowerCase()}`}>
                        {item.status}
                      </span>
                    </td>
                    <td>
                      <span
                        className="action-icons"
                        onClick={() => handleGenerateReceipt(item)}
                      >
                        📄 🔍 ↩️ 🗑️
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <PaymentHistoryModal
          payments={paymentHistory}
          onClose={() => setShowHistory(false)}
        />
      )}

      {showReceipt && (
        <ReceiptModal payment={selectedPayment} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default PaymentPage;
