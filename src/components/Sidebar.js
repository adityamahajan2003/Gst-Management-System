import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>Client Management</li>
          <li>Document Management</li>
          <li>GST Filing</li>
          <li>Quotation & Invoice</li>
          <li>Payment</li>
          <li>Report</li>
          <li>Support</li>
          <li>Setting</li>
        </ul>
      </nav>
      <div className="logout">Log out</div>
    </aside>
  );
};

export default Sidebar;
