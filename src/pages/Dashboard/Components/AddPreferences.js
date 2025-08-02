import React from "react";
import "./AddPreferences.css"; // style it as per the screenshot

const AddPreferences = () => {
  return (
    <div className="preferences-container">
      <div className="preferences-section">
        <h3>Language</h3>
        <select className="select-input">
          <option>English</option>
          <option>Hindi</option>
          <option>Marathi</option>
        </select>
      </div>

      <div className="preferences-section">
        <h3>Activity Status</h3>
        <label className="toggle-row">
          Activity Status
          <input type="checkbox" defaultChecked />
        </label>
        <label className="toggle-row">
          Recent Activity Visibility
          <input type="radio" name="activity" defaultChecked /> Show
          <input type="radio" name="activity" /> Hide
        </label>
      </div>

      <div className="preferences-section">
        <h3>Visibility Options</h3>
        <label>
          Profile Visibility
          <select className="select-input">
            <option>Public</option>
            <option>Private</option>
          </select>
        </label>
        <label className="toggle-row">
          Search Engine Visibility
          <input type="checkbox" defaultChecked />
        </label>
      </div>

      <div className="preferences-section">
        <h3>Notifications Settings</h3>
        <label className="toggle-row">
          Email notifications
          <input type="checkbox" defaultChecked />
        </label>
        <label className="toggle-row">
          Push notifications
          <input type="checkbox" defaultChecked />
        </label>
        <label className="toggle-row">
          In-App notifications
          <input type="checkbox" defaultChecked />
        </label>
      </div>

      <div className="preferences-section">
        <h3>Who Can See Your Contact Info</h3>
        <select className="select-input">
          <option>Everyone</option>
          <option>Only Me</option>
          <option>Connections Only</option>
        </select>
      </div>

      <div className="preferences-section">
        <h3>Free up Storage</h3>
        <label>
          Clear Cache
          <select className="select-input">
            <option>Select</option>
            <option>30 Days</option>
            <option>90 Days</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default AddPreferences;
