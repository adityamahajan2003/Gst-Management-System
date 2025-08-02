import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import "./BusinessDashboardPage.css";

const BusinessDashboardPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <Topbar showSearch={true} showBack={false} />
      <div className="business-dashboard-container">
        <Sidebar
          onLogout={handleLogout}
          sidebarType="business"
        />

        <div className="dashboard-page-content">
          <div style={{ padding: "2rem", fontSize: "1.2rem" }}>
            Business Dashboard Placeholder — Content coming soon!
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessDashboardPage;
