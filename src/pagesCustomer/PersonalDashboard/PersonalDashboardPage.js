import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import PersonalDashboardComponent from "./Components/PersonalDashboardComponent";
import IncomeTaxFilling from "./Components/IncomeTaxFilling";
import TaxConsultantPage from "./Components/TaxConsultantPage";
import Documents from "./Components/Documents";
import Support from "./Components/Support";
import "./PersonalDashboardPage.css";
import SettingsCustomer from "./Components/SettingsCustomer";

const PersonalDashboardPage = () => {
  const [currentPage, setCurrentPage] = useState("Dashboard");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "Dashboard":
        return <PersonalDashboardComponent />;
      case "Income Tax Filing":
        return <IncomeTaxFilling />;
      case "Tax Consultant":
        return <TaxConsultantPage />;
      case "Documents":
        return <Documents />;
      case "Support":
        return <Support />;
      case "Settings":
        return <SettingsCustomer />;
      default:
        return <PersonalDashboardComponent />;
    }
  };

  return (
    <>
      <Topbar showSearch={true} showBack={false} />
      <div className="personal-dashboard-container">
        <Sidebar
          onLogout={handleLogout}
          onSelectPage={setCurrentPage}
          sidebarType="personal"
        />
        <div className="dashboard-page-content">{renderPage()}</div>
      </div>
    </>
  );
};

export default PersonalDashboardPage;
