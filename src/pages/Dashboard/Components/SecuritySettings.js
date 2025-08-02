import React, { useState } from 'react';
import './SecuritySettings.css'; // Import the CSS file

const SecuritySettings = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [twoFactorMethod, setTwoFactorMethod] = useState('');

  const handlePasswordSave = () => {
    console.log('Password changed:', currentPassword, newPassword, confirmPassword);
    // Add your API logic here
  };

  const handleTwoFactorProceed = () => {
    console.log('Two factor method selected:', twoFactorMethod);
    // Add your API logic here
  };

  return (
    <div className="security-container">
      {/* Password Management */}
      <div className="card">
        <h2>Password Management</h2>
        <div className="form-group">
          <label>Current password</label>
          <input
            type="password"
            placeholder="Current password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>New password</label>
          <input
            type="password"
            placeholder="New password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Confirm password</label>
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button className="primary-btn" onClick={handlePasswordSave}>Save</button>
      </div>

      {/* Two-Factor Authentication */}
      <div className="card">
        <h2>Two-Factor Authentication</h2>
        <div
          className={`two-factor-option ${twoFactorMethod === 'app' ? 'selected' : ''}`}
          onClick={() => setTwoFactorMethod('app')}
        >
          <input
            type="radio"
            checked={twoFactorMethod === 'app'}
            onChange={() => setTwoFactorMethod('app')}
          />
          <div>
            <p className="option-title">Mobile app authenticator</p>
            <p className="option-desc">Securely access your profile with a time-based code from your authenticator app.</p>
          </div>
        </div>

        <div
          className={`two-factor-option ${twoFactorMethod === 'email' ? 'selected' : ''}`}
          onClick={() => setTwoFactorMethod('email')}
        >
          <input
            type="radio"
            checked={twoFactorMethod === 'email'}
            onChange={() => setTwoFactorMethod('email')}
          />
          <div>
            <p className="option-title">Email</p>
            <p className="option-desc">Receive a one-time code via email for quick and secure profile access.</p>
          </div>
        </div>

        <button className="primary-btn" onClick={handleTwoFactorProceed}>Proceed</button>
      </div>
    </div>
  );
};

export default SecuritySettings;
