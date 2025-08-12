import React from "react";
import "./BusinessDashboardComponent.css"; // 👈 Use separate CSS
import dashboardimg from '../../../assets/PersonalDashboard/dashboard.png'; // Change image if needed

const BusinessDashboardComponent = () => {
  return (
    <div className="business-dashboard-content">
      {/* Header Banner */}
      <div className="business-header-banner">
        <div className="business-header-content">
          <h2>Welcome Back</h2>
          <p>Monitor your company’s finances and key deadlines here.</p>
        </div>
        <div className="business-header-image">
          <img src={dashboardimg} alt="Business Dashboard Banner" />
        </div>
      </div>

      {/* Dashboard Cards */}
      <div className="business-dashboard-cards">
        <div className="business-dashboard-card">Total Revenue</div>
        <div className="business-dashboard-card">Expenses</div>
        <div className="business-dashboard-card">Profit & Loss</div>
        <div className="business-dashboard-card">GST Summary</div>
      </div>

      {/* Dashboard Charts */}
      <div className="business-dashboard-charts">
        <div className="business-chart-card">Sales Overview (Pie Chart)</div>
        <div className="business-chart-card">Monthly Expenses (Bar Chart)</div>
        <div className="business-chart-card business-deadline-card">Compliance Deadlines (Calendar)</div>
      </div>
    </div>
  );
};

export default BusinessDashboardComponent;
