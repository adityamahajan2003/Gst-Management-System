import React, { useState } from 'react';
import OTPInput from '../../components/OTPInput';
import './VerificationPage.css';
import { ReactComponent as ShieldIcon } from '../../assets/shield.svg'; // Or use an emoji/icon

const VerificationPage = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleVerify = () => {
    const otpCode = otp.join('');
    if (otpCode.length === 6) {
      alert(`Verifying OTP: ${otpCode}`);
      // Handle real verification logic
    } else {
      alert('Please enter the full OTP');
    }
  };

  return (
    <div className="verification-container">
      <div className="verification-box">
        <div className="icon-circle">
          <ShieldIcon />
        </div>
        <p className="otp-message">Enter OTP Code sent to <br /><strong>********@gmail.com</strong></p>
        <OTPInput value={otp} onChange={setOtp} />
        <button className="verify-btn" onClick={handleVerify}>Verify</button>
      </div>
    </div>
  );
};

export default VerificationPage;
