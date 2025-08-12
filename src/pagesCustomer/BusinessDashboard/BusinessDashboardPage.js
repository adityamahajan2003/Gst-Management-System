import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import BusinessDashboardComponent from "../BusinessDashboard/Components/BusinessDashboardComponent";
import "./BusinessDashboardPage.css";

const BusinessDashboardPage = () => {
  const [currentPage, setCurrentPage] = useState("Dashboard");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // Dynamic render function
  const renderPage = () => {
    switch (currentPage) {
      case "Dashboard":
        return <BusinessDashboardComponent />;
      case "GST Filing":
        return <div className="coming-soon">GST Filing Page Coming Soon...</div>;
      case "Invoices":
        return <div className="coming-soon">Invoices Page Coming Soon...</div>;
      case "Settings":
        return <div className="coming-soon">Settings Page Coming Soon...</div>;
      case "Reports":
        return <div className="coming-soon">Reports Page Coming Soon...</div>;
      default:
        return <div className="coming-soon">Page Not Found</div>;
    }
  };

  return (
    <>
      <Topbar showSearch={true} showBack={false} />
      <div className="business-dashboard-container">
        <Sidebar
          onLogout={handleLogout}
          onSelectPage={setCurrentPage}
          sidebarType="business"
        />
        <div className="dashboard-page-content">{renderPage()}</div>
      </div>
    </>
  );
};

export default BusinessDashboardPage;
