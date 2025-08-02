import React from "react";
import "./PaymentHistoryModal.css";

// Grouping by Month and Year
const groupByMonth = (payments) => {
  const grouped = {};
  payments.forEach((p) => {
    const [, month, year] = p.paymentDate.split(" ");
    const key = `${month} ${year}`;
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(p);
  });
  return grouped;
};

const PaymentHistoryModal = ({ payments, onClose }) => {
  const groupedPayments = groupByMonth(payments);

  return (
    <div className="history-panel-container">
      <div className="history-header">
        <h2>Payment History</h2>
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>

      <div className="payment-history-content">
        {Object.entries(groupedPayments).map(([month, records], index) => (
          <div key={index} className="month-section">
            <h4 className="month-title">{month}</h4>
            <table className="history-table">
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
                {records.map((item, i) => (
                  <tr key={i}>
                    <td>{item.paymentId}</td>
                    <td>{item.gstNumber}</td>
                    <td>{item.paymentDate}</td>
                    <td>{item.amount}</td>
                    <td>{item.paymentMethod}</td>
                    <td>{item.transactionId}</td>
                    <td>
                      <span className={`status-tag ${item.status.toLowerCase()}`}>
                        ● {item.status}
                      </span>
                    </td>
                    <td>
                      <span className="action-icons">👁️ 🧾 🔁 🗑️</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentHistoryModal;
