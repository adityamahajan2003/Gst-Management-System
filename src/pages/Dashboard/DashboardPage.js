import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import SetupProfileForm from "../../components/SetupProfileForm";
import DashboardComponent from "./Components/DashboardComponent";
import ClientManagementBusiness from "./Components/ClientManagementBusiness";
import ClientManagementClient from "./Components/ClientManagementClient";
import DocumentManagement from "./Components/DocumentManagement";
import QuotationManagement from "./Components/QuotationManagement";
import CreateQuotation from "./Components/CreateQuotation";
import InvoiceMaker from "./Components/InvoiceMaker";
import PaymentPage from "./Components/PaymentPage";
import ReportPage from "./Components/ReportPage";
import SupportChat from "./Components/SupportChat";
import SettingsProfile from "./Components/SettingsProfile";
import "./DashboardPage.css";

const DashboardPage = () => {
  const [showSetupModal, setShowSetupModal] = useState(true);
  const [showRequests, setShowRequests] = useState(false);
  const [currentPage, setCurrentPage] = useState("Dashboard");
  const [selectedClientTab, setSelectedClientTab] = useState("Business");
  const [showCreateQuotation, setShowCreateQuotation] = useState(false);
  const [showInvoiceMaker, setShowInvoiceMaker] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleSetupComplete = () => {
    setShowSetupModal(false);
  };

  const handleBackClick = () => {
    if (showRequests) {
      setShowRequests(false);
    } else if (showCreateQuotation) {
      setShowCreateQuotation(false);
    } else if (showInvoiceMaker) {
      setShowInvoiceMaker(false);
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "Dashboard":
        return (
          <DashboardComponent
            showRequests={showRequests}
            setShowRequests={setShowRequests}
          />
        );

      case "Client Management":
        return selectedClientTab === "Business" ? (
          <ClientManagementBusiness setSelectedClientTab={setSelectedClientTab} />
        ) : (
          <ClientManagementClient setSelectedClientTab={setSelectedClientTab} />
        );

      case "Document Management":
        return <DocumentManagement />;

      case "GST Filing":
        return <div>GST Filing Page Coming Soon</div>;

      case "Quotation & Filing":
        if (showCreateQuotation) {
          return <CreateQuotation onClose={() => setShowCreateQuotation(false)} />;
        } else if (showInvoiceMaker) {
          return <InvoiceMaker onBack={handleBackClick} />;
        } else {
          return (
            <QuotationManagement
              onCreate={() => setShowCreateQuotation(true)}
              onCreateInvoice={() => setShowInvoiceMaker(true)}
            />
          );
        }

      case "Payments":
        return <PaymentPage />;

      case "Reports":
        return <ReportPage />;

      case "Support":
        return <SupportChat />;

      case "Settings":
        return <SettingsProfile />;

      default:
        return <div>Page Not Found</div>;
    }
  };

  const showBackButton = showRequests || showCreateQuotation || showInvoiceMaker;
  const backLabel =
    showCreateQuotation
      ? "Back to Quotation List"
      : showInvoiceMaker
      ? "Back to Invoice List"
      : "Back";

  return (
    <>
      <Topbar
        showSearch={!showBackButton}
        showBack={showBackButton}
        onBackClick={handleBackClick}
        backLabel={backLabel}
      />

      <div className={`dashboard-container ${showSetupModal ? "blurred" : ""}`}>
        <Sidebar onLogout={handleLogout} onSelectPage={setCurrentPage} />
        <div className="dashboard-content-area">
          {renderCurrentPage()}
        </div>
      </div>

      {showSetupModal && (
        <div className="modal-overlay">
          <SetupProfileForm onSave={handleSetupComplete} />
        </div>
      )}
    </>
  );
};

export default DashboardPage;
