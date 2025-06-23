import React, { useState } from 'react';
import './RegistrationPage.css';
import illustration from '../../assets/registration-illustration.png';
import InputField from '../../components/InputField';
import SelectField from '../../components/SelectField';
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

  const handleDobChange = (field, value) => {
    setFormData({ ...formData, dob: { ...formData.dob, [field]: value } });
  };

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
      <div className='logo'>
    < Logo/>
    </div> 
      <div className="registration-container">
        <div className="left-section">
          <h1>Create Account</h1>
          <p>Share Your Basic Information for Account Creation</p>

          <SelectField
            placeholder="Register as"
            name="registerAs"
            value={formData.registerAs || ''}
            onChange={handleChange}
            options={['CA', 'CS', 'CMA']}
          />

          <div className="row">
            <InputField placeholder="First Name*" name="firstName" value={formData.firstName} onChange={handleChange} />
            <InputField placeholder="Last Name*" name="lastName" value={formData.lastName} onChange={handleChange} />
          </div>

          <div className="gender-options">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />
              Female
            </label>
          </div>

          <div className="dob-selector">
            <select value={formData.dob.day} onChange={e => handleDobChange('day', e.target.value)}>
              <option value="">Date</option>
              {[...Array(31)].map((_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
            <select value={formData.dob.month} onChange={e => handleDobChange('month', e.target.value)}>
              <option value="">Month</option>
              {[
                'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'
              ].map((month, i) => (
                <option key={i + 1} value={month}>{month}</option>
              ))}
            </select>
            <select value={formData.dob.year} onChange={e => handleDobChange('year', e.target.value)}>
              <option value="">Year</option>
              {Array.from({ length: 70 }, (_, i) => new Date().getFullYear() - i).map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>

          <div className="row">
            <InputField placeholder="Email*" name="email" type="email" value={formData.email} onChange={handleChange} />
            <InputField placeholder="Phone Number*" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
          </div>

          <InputField placeholder="Office Address" name="address" value={formData.address} onChange={handleChange} />

          <div className="row">
            <InputField placeholder="City*" name="city" value={formData.city} onChange={handleChange} />
            <SelectField placeholder="State*" name="state" value={formData.state} onChange={handleChange} options={['Maharashtra', 'Delhi', 'Gujarat']} />
          </div>

          <SelectField placeholder="Specialisation*" name="specialization" value={formData.specialization} onChange={handleChange} options={['Audit', 'Tax', 'Advisory']} />
          <InputField placeholder="ICAI Membership Number*" name="icai" value={formData.icai} onChange={handleChange} />
          <InputField placeholder="PAN Card Number*" name="pan" value={formData.pan} onChange={handleChange} />
          <InputField placeholder="Password*" type="password" name="password" value={formData.password} onChange={handleChange} />
          <InputField placeholder="Confirm Password*" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />

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
