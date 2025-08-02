import React from "react";
import "./RecentTransaction.css";
import transactions from "../../../Config/transaction.json";

const RecentTransactions = () => {
  return (
    <div className="recent-transactions-container">
      <h2>Recent Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx, index) => (
            <tr key={index}>
              <td>{tx.name}</td>
              <td>{tx.date}</td>
              <td>{tx.time}</td>
              <td>{tx.amount}</td>
              <td className={`status ${tx.status.toLowerCase()}`}>
                {tx.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentTransactions;
