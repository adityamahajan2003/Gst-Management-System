import React, { useState } from 'react';
import './LoginPage.css';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import loginpageimg from '../../assets/LoginPage.png';
import { useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('Login with:', { email, password });
    navigate('/setup');
  };

  return (
    <>
    < Logo/> 
    <div className="login-container"> 
      <div className="login-left">
        <img src={loginpageimg} alt="Login Illustration" className="illustration" />
      </div>
      <div className="login-right">
        <h1 className='title'>Hello</h1>
        <p>To keep connected with us please login</p>
        <InputField
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="options">
          <label>
            <input type="checkbox" /> Remember
          </label>
          <a href="/forgot">Forgot password?</a>
        </div>
        <div className='login-btn'>
        <Button text="Login" onClick={handleLogin} />
        </div>
        <p className="register">Don’t have an account? <a href="/register">Register</a></p>
      </div>
    </div>
  </>
  );
};

export default LoginPage;