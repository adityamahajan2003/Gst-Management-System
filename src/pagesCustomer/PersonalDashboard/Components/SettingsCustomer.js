import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SettingsCustomer.css";
import AddPreferencesCustomer from "../../PersonalDashboard/Components/AddPreferencesCustomer";
import SecurityCustomer from "../../PersonalDashboard/Components/SecurityCustomer";
import LogoutCustomerModule from "../../PersonalDashboard/Components/LogoutCustomerModule";

const SettingsCustomer = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    setActiveTab("logout");
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    setShowLogoutModal(false);

    // ✅ Your logout logic (clear tokens, etc.)
    console.log("Logged out");

    // Redirect to login
    navigate("/login");
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
    setActiveTab("profile");
  };

  return (
    <div className="settings-customer-wrapper">
      <div className="settings-customer-container">
        <h2 className="settings-customer-title">Settings</h2>

        <div className="settings-customer-tabs">
          <button
            className={`settings-customer-tab ${activeTab === "profile" ? "active" : ""}`}
            onClick={() => setActiveTab("profile")}
          >
            My Profile
          </button>
          <button
            className={`settings-customer-tab ${activeTab === "preferences" ? "active" : ""}`}
            onClick={() => setActiveTab("preferences")}
          >
            Add Preferences
          </button>
          <button
            className={`settings-customer-tab ${activeTab === "security" ? "active" : ""}`}
            onClick={() => setActiveTab("security")}
          >
            Security
          </button>
          <button
            className={`settings-customer-tab ${activeTab === "logout" ? "active" : ""}`}
            onClick={handleLogoutClick}
          >
            Log out
          </button>
        </div>

        {activeTab === "profile" && (
          <div className="settings-customer-profile-card">
            <div className="settings-customer-profile-header">
              <div className="settings-customer-avatar-section">
                <div className="settings-customer-avatar" />
                <button className="settings-customer-change-photo">
                  Change Profile Photo
                </button>
              </div>
              <div>
                <h3>Shubham Sharma</h3>
                <p>Software Developer</p>
                <p>Pune, Maharashtra</p>
              </div>
              <button className="settings-customer-edit-btn">✎ Edit</button>
            </div>

            <form className="settings-customer-form">
              <div className="settings-customer-form-row">
                <input type="text" placeholder="Shubham" />
                <input type="text" placeholder="Sharma" />
              </div>
              <input type="email" placeholder="shubhamssharmaa@gmail.com" />
              <input type="tel" placeholder="+91----------" />
              <input type="text" placeholder="Male" />
              <input type="date" />
              <input type="text" placeholder="City" />
              <button type="submit" className="settings-customer-save-btn">
                Save
              </button>
            </form>
          </div>
        )}

        {activeTab === "preferences" && (
          <div className="settings-customer-preferences-panel">
            <AddPreferencesCustomer />
          </div>
        )}

        {activeTab === "security" && (
          <div className="settings-customer-security">
            <SecurityCustomer />
          </div>
        )}

        {/* Logout Modal */}
        {activeTab === "logout" && showLogoutModal && (
          <LogoutCustomerModule
            username="@Adminxx"
            onCancel={cancelLogout}
            onLogout={confirmLogout}
          />
        )}
      </div>
    </div>
  );
};

export default SettingsCustomer;
