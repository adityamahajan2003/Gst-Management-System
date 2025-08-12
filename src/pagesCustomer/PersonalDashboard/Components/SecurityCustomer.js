import React, { useState } from "react";
import "./SecurityCustomer.css";

const SecurityCustomer = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("mobile");

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="security-customer-container">
      {/* Password Management Section */}
      <div className="security-customer-card">
        <h3>Password Management</h3>
        <div className="security-customer-input-group">
          <label>Current password</label>
          <div className="input-with-icon">
            <span className="icon-lock">🔒</span>
            <input type={showPassword ? "text" : "password"} placeholder="Current password" />
            <span className="icon-eye" onClick={togglePasswordVisibility}>👁️</span>
          </div>
        </div>
        <div className="security-customer-input-group">
          <label>New password</label>
          <div className="input-with-icon">
            <span className="icon-lock">🔒</span>
            <input type={showPassword ? "text" : "password"} placeholder="New password" />
            <span className="icon-eye" onClick={togglePasswordVisibility}>👁️</span>
          </div>
        </div>
        <div className="security-customer-input-group">
          <label>Confirm password</label>
          <div className="input-with-icon">
            <span className="icon-lock">🔒</span>
            <input type={showPassword ? "text" : "password"} placeholder="Confirm password" />
            <span className="icon-eye" onClick={togglePasswordVisibility}>👁️</span>
          </div>
        </div>
        <button className="security-customer-save-btn">Save</button>
      </div>

      {/* Two-Factor Authentication Section */}
      <div className="security-customer-card">
        <h3>Two-Factor authentication</h3>
        <div
          className={`auth-option ${selectedMethod === "mobile" ? "selected" : ""}`}
          onClick={() => setSelectedMethod("mobile")}
        >
          <input type="radio" checked={selectedMethod === "mobile"} readOnly />
          <div>
            <strong>Mobile app authenticator</strong>
            <p>Securely access your profile with a time-based code from your authenticator app.</p>
          </div>
        </div>
        <div
          className={`auth-option ${selectedMethod === "email" ? "selected" : ""}`}
          onClick={() => setSelectedMethod("email")}
        >
          <input type="radio" checked={selectedMethod === "email"} readOnly />
          <div>
            <strong>Email</strong>
            <p>Receive a one-time code via email for quick and secure profile access.</p>
          </div>
        </div>
        <button className="security-customer-proceed-btn">Proceed</button>
      </div>
    </div>
  );
};

export default SecurityCustomer;
