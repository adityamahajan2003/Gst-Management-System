import React from "react";
import "./PersonalDashboardComponent.css";
import dashboardimg from '../../../assets/PersonalDashboard/dashboard.png';

const PersonalDashboardComponent = () => {
  return (
    <div className="personal-dashboard-content">
      {/* Header Banner */}
      <div className="header-banner">
        <div className="header-content">
          <h2>Welcome to Your Dashboard</h2>
          <p>Here is a summary of your finances and upcoming tasks.</p>
        </div>
        <div className="header-image">
          <img src={dashboardimg} alt="Dashboard Banner" />
        </div>
      </div>

      {/* Dashboard Cards */}
      <div className="dashboard-cards">
        <div className="dashboard-card">Total Income</div>
        <div className="dashboard-card">Total Deduction</div>
        <div className="dashboard-card">Tax Payable</div>
        <div className="dashboard-card">Summary</div>
      </div>

      {/* Dashboard Charts */}
      <div className="dashboard-charts">
        <div className="chart-card">Tax Filing Status (Circular)</div>
        <div className="chart-card">Expense Graph (Bar Chart)</div>
        <div className="chart-card deadline-card">Upcoming Deadlines (Calendar)</div>
      </div>
    </div>
  );
};

export default PersonalDashboardComponent;
