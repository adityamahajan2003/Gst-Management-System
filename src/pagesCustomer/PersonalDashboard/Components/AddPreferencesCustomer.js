import React from "react";
import "./AddPreferencesCustomer.css";

const AddPreferencesCustomer = () => {
  return (
    <div className="ap-customer-wrapper">
      {/* Left Column */}
      <div className="ap-customer-left">
        <div className="ap-customer-section">
          <div className="ap-customer-box">
            <div className="ap-customer-row">
              <label>Switch Account</label>
              <div className="ap-customer-toggle-group">
                <span>Personal</span>
                <label className="ap-customer-toggle">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
                <span>Business</span>
              </div>
            </div>
          </div>
        </div>

        <div className="ap-customer-section">
          <h3 className="ap-customer-title">Language</h3>
          <div className="ap-customer-box">
            <div className="ap-customer-row">
              <label>Language settings</label>
              <select>
                <option>English</option>
              </select>
            </div>
          </div>
        </div>

        <div className="ap-customer-section">
          <h3 className="ap-customer-title">Activity Status</h3>
          <div className="ap-customer-box">
            <div className="ap-customer-flex-row">
              <label>Activity Status</label>
              <label className="ap-customer-toggle">
                <input type="checkbox" defaultChecked />
                <span className="slider"></span>
              </label>
            </div>
            <div className="ap-customer-row">
              <label>Recent Activity Visibility</label>
              <div className="ap-customer-toggle-group">
                <span>Show</span>
                <label className="ap-customer-toggle">
                  <input type="checkbox" defaultChecked />
                  <span className="slider"></span>
                </label>
                <span>Hide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="ap-customer-section">
          <h3 className="ap-customer-title">Visibility Options</h3>
          <div className="ap-customer-box">
            <div className="ap-customer-row">
              <label>Profile Visibility</label>
              <select>
                <option>Public</option>
                <option>Private</option>
              </select>
            </div>
            <div className="ap-customer-row">
              <label>Contact Info Visibility</label>
              <select>
                <option>Everyone</option>
                <option>Only Me</option>
              </select>
            </div>
            <div className="ap-customer-row">
              <label>Search Engine Visibility</label>
              <label className="ap-customer-toggle">
                <input type="checkbox" defaultChecked />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="ap-customer-right">
        <div className="ap-customer-section">
          <h3 className="ap-customer-title">Notifications Settings</h3>
          <div className="ap-customer-box">
            <div className="ap-customer-row">
              <label>Email notifications</label>
              <label className="ap-customer-toggle">
                <input type="checkbox" defaultChecked />
                <span className="slider"></span>
              </label>
            </div>
            <div className="ap-customer-row">
              <label>Push notifications</label>
              <label className="ap-customer-toggle">
                <input type="checkbox" defaultChecked />
                <span className="slider"></span>
              </label>
            </div>
            <div className="ap-customer-row">
              <label>In-App notifications</label>
              <label className="ap-customer-toggle">
                <input type="checkbox" defaultChecked />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>

        <div className="ap-customer-section">
          <h3 className="ap-customer-title">Free up Storage</h3>
          <div className="ap-customer-box">
            <div className="ap-customer-row">
              <label>Clear Cache</label>
              <select>
                <option>Select</option>
              </select>
            </div>
          </div>
        </div>

        <div className="ap-customer-section">
          <h3 className="ap-customer-title">Delete Options</h3>
          <div className="ap-customer-box">
            <div className="ap-customer-row">
              <label>Delete Account</label>
              <select>
                <option>Select</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPreferencesCustomer;
