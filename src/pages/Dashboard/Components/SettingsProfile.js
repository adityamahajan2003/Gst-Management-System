import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./SettingsProfile.css";
import AddPreferences from "./AddPreferences";
import SecuritySettings from "./SecuritySettings";
import LogoutModal from "./LogoutModal";

const SettingsProfile = () => {
  const [setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");
  const navigate = useNavigate(); // Initialize navigate

  const handleEdit = () => setIsEditing(true);
  const handleSave = () => {
    setIsEditing(false);
    alert("Profile saved!");
  };

  const handleLogout = () => {
    // Clear tokens or user state here
    alert("Logged out!");
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="settings-page">
      {/* Heading */}
      <h1 className="page-heading">Settings</h1>

      {/* Tabs */}
      <div className="tabs-pill-container">
  <div className="tabs-pill">
    <button
      className={`pill-tab ${activeTab === "profile" ? "active" : ""}`}
      onClick={() => setActiveTab("profile")}
    >
      My Profile
    </button>
    <button
      className={`pill-tab ${activeTab === "preferences" ? "active" : ""}`}
      onClick={() => setActiveTab("preferences")}
    >
      Add Preferences
    </button>
    <button
      className={`pill-tab ${activeTab === "security" ? "active" : ""}`}
      onClick={() => setActiveTab("security")}
    >
      Security
    </button>
    <button
      className={`pill-tab ${activeTab === "logout" ? "active" : ""}`}
      onClick={() => setActiveTab("logout")}
    >
      Log out
    </button>
  </div>
</div>


      {/* Conditional Content */}
      {activeTab === "profile" && (
        <div className="profile-card">
          <div className="profile-header">
            <div className="avatar">
              <img
                src="https://via.placeholder.com/80"
                alt="Profile"
                className="avatar-img"
              />
              <button className="change-photo">Change Profile Photo</button>
            </div>
            <div className="profile-info">
              <h2>Anuj Verma</h2>
              <p>
                Specializes in Personal Income Tax,
                <br />
                Pune, Maharashtra
              </p>
            </div>
            <button className="edit-btn" onClick={handleEdit}>
              ✏️ Edit
            </button>
          </div>

          {/* Form */}
          <div className="profile-form">
            <div className="form-left">
              {[
                ["First Name", "Anuj"],
                ["Last Name", "Verma"],
                ["Email address", "anujverma@gmail.com"],
                ["Phone Number", "+91---------"],
                ["Gender", "Male"],
                ["Date of Birth", "-- -- ----"],
                ["City", "Pune"],
              ].map(([label, value]) => (
                <div className="form-group horizontal" key={label}>
                  <label>{label}</label>
                  <input type="text" defaultValue={value} />
                </div>
              ))}
            </div>

            <div className="form-right">
              {[
                ["Bio", "Specializes in personal taxation"],
                ["Experience", "5+ years"],
                ["Fees", "₹2000"],
                ["Certificates", "CA, Tax Consultant"],
              ].map(([label, value]) => (
                <div className="form-group horizontal" key={label}>
                  <label>{label}</label>
                  <input type="text" defaultValue={value} />
                </div>
              ))}

              <div className="form-group horizontal">
                <label>Uploads</label>
                <div className="upload-preview">
                  <div className="img-placeholder">🖼</div>
                  <div className="img-placeholder">🖼</div>
                  <div className="img-add">+</div>
                </div>
              </div>
            </div>
          </div>

          {/* Save button */}
          <div className="button-row">
            <button className="save-button" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      )}

      {activeTab === "preferences" && <AddPreferences />}

      {activeTab === "security" && <SecuritySettings />}

      {activeTab === "logout" && (
        <LogoutModal
          username="@Adminxx"
          onCancel={() => setActiveTab("profile")}
          onLogout={handleLogout}
        />
      )}
    </div>
  );
};

export default SettingsProfile;
