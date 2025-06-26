import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import forgotImg from '../../assets/forgot-password-illustration.png';
import Logo from '../../components/Logo';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleReset = () => {
    console.log("Reset link sent to:", email);
    navigate('/verification'); 
  };

  return (
    <>
      <div className='logo'>
        <Logo />
      </div> 
      <div className="forgot-container">
        <div className="forgot-left">
          <img src={forgotImg} alt="Reset Illustration" className="forgot-img" />
        </div>
        <div className="forgot-right">
          <div className="forgot-box">
            <h2>Forgot Password</h2>
            <p>Enter your email address associated with your account to recover your password</p>
            <InputField
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button text="Reset Password" onClick={handleReset} />
            <div className="back-login" onClick={() => navigate('/')}>
              Back to <span className="login-link">Login</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
