import React, { useState } from 'react';
import './RegistrationPage.css';
import illustration from '../../assets/registration-illustration.png';
import InputField from '../../components/InputField';
import SelectField from '../../components/SelectField';
import GenderSelector from '../../components/GenderSelector';
import DOBSelector from '../../components/DOBSelector';
import Checkbox from '../../components/Checkbox';
import Button from '../../components/Button';
import Logo from '../../components/Logo';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', gender: '', dob: { day: '', month: '', year: '' },
    email: '', phone: '', address: '', city: '', state: '', specialization: '',
    icai: '', pan: '', password: '', confirmPassword: '', agree: false
  });

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (formData.agree) {
      console.log(formData);
      alert('Registered!');
    } else {
      alert('Please agree to Terms');
    }
  };

  return (
    <>
    < Logo/>
    <div className="registration-container">
      <div className="left-section">
        <h1>Create Account</h1>
        <p>Share Your Basic Information for Account Creation</p>

        <SelectField label="Register as" name="registerAs" value={formData.registerAs || ''} onChange={handleChange} options={['CA', 'CS', 'CMA']} />
        <div className="row">
          <InputField label="First Name*" name="firstName" value={formData.firstName} onChange={handleChange} />
          <InputField label="Last Name*" name="lastName" value={formData.lastName} onChange={handleChange} />
        </div>
        <GenderSelector value={formData.gender} onChange={handleChange} />
        <DOBSelector dob={formData.dob} setDob={dob => setFormData({ ...formData, dob })} />
        <div className="row">
          <InputField label="Email*" name="email" type="email" value={formData.email} onChange={handleChange} />
          <InputField label="Phone Number*" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
        </div>
        <InputField label="Office Address" name="address" value={formData.address} onChange={handleChange} />
        <div className="row">
          <InputField label="City*" name="city" value={formData.city} onChange={handleChange} />
          <SelectField label="State*" name="state" value={formData.state} onChange={handleChange} options={['Maharashtra', 'Delhi', 'Gujarat']} />
        </div>
        <SelectField label="Specialisation*" name="specialization" value={formData.specialization} onChange={handleChange} options={['Audit', 'Tax', 'Advisory']} />
        <InputField label="ICAI Membership Number*" name="icai" value={formData.icai} onChange={handleChange} />
        <InputField label="PAN Card Number*" name="pan" value={formData.pan} onChange={handleChange} />
        <InputField label="Password*" type="password" name="password" value={formData.password} onChange={handleChange} />
        <InputField label="Confirm Password*" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
        <Checkbox label=" I agree to the Terms of Services and Privacy Policy" checked={formData.agree} onChange={e => setFormData({ ...formData, agree: e.target.checked })} />

        <Button text="Submit" onClick={handleSubmit} className="submit-btn" />


        <p className="login-link">Already have an account? <a href="/login">Login</a></p>
      </div>

      <div className="right-section">
        <img src={illustration} alt="Illustration" />
      </div>
    </div>
  </>
  );
};

export default RegistrationPage;
