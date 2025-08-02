import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegistrationPage.css";
import illustration from "../../assets/registration-illustration.png";
import RegistrationInputField from "./RegistrationInputField";
import RegistrationSelectField from "./RegistrationSelectField";
import CustomerPersonalForm from "./CustomerPersonalForm";
import CustomerBusinessForm from "./CustomerBusinessForm";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";
import Logo from "../../components/Logo";

const RegistrationPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    registerAs: "Admin",
    firstName: "",
    lastName: "",
    gender: "",
    dob: { day: "", month: "", year: "" },
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    specialization: "",
    icai: "",
    pan: "",
    aadhaar: "",
    password: "",
    confirmPassword: "",
    agree: false,

    // Business specific
    businessName: "",
    businessType: "",
    numEmployees: "",
    businessAddress: "",
    companyIncorp: "",
    gstin: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleDobChange = (field, value) => {
    setFormData({ ...formData, dob: { ...formData.dob, [field]: value } });
  };

  const handleSubmit = () => {
    if (!formData.agree) {
      alert("Please agree to the Terms of Services and Privacy Policy");
      return;
    }

    const roleMap = {
      "Admin": "admin",
      "Customer (Personal)": "customer_personal",
      "Customer (Business)": "customer_business",
    };

    const newUser = {
      email: formData.email,
      password: formData.password,
      role: roleMap[formData.registerAs],
    };

    localStorage.setItem("user", JSON.stringify(newUser));
    alert("Registered Successfully!");
    navigate("/");
  };

  return (
    <>
      <div className="logo">
        <Logo />
      </div>

      <div className="registration-container">
        <div className="left-section">
          <h1>Create Account</h1>
          <p>Share Your Basic Information for Account Creation</p>

          <div className="registration-input-group">
            <RegistrationSelectField
              label="Register as*"
              name="registerAs"
              value={formData.registerAs}
              onChange={handleChange}
              options={["Admin", "Customer (Personal)", "Customer (Business)"]}
              className="select-registeras"
            />
          </div>

          {/* Admin Form */}
          {formData.registerAs === "Admin" && (
            <>
              <div className="row">
                <RegistrationInputField
                  label="First Name*"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <RegistrationInputField
                  label="Last Name*"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>

              <div className="row gender-dob-row">
                <div className="registration-input-group">
                  <label>Gender</label>
                  <div className="radio-options">
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
                </div>

                <div className="registration-input-group">
                  <label>Date of Birth</label>
                  <div className="dob-select-inline">
                    <select
                      value={formData.dob.day}
                      onChange={(e) => handleDobChange("day", e.target.value)}
                    >
                      <option value="">Date</option>
                      {[...Array(31)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                    <select
                      value={formData.dob.month}
                      onChange={(e) => handleDobChange("month", e.target.value)}
                    >
                      <option value="">Month</option>
                      {[
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December",
                      ].map((month, i) => (
                        <option key={i + 1} value={month}>
                          {month}
                        </option>
                      ))}
                    </select>
                    <select
                      value={formData.dob.year}
                      onChange={(e) => handleDobChange("year", e.target.value)}
                    >
                      <option value="">Year</option>
                      {Array.from(
                        { length: 70 },
                        (_, i) => new Date().getFullYear() - i
                      ).map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <RegistrationInputField
                  label="Email*"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <RegistrationInputField
                  label="Phone Number*"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <RegistrationInputField
                label="Office Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />

              <div className="row">
                <RegistrationInputField
                  label="City*"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
                <RegistrationSelectField
                  label="State*"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  options={["Maharashtra", "Delhi", "Gujarat"]}
                  className="select-default"
                />
              </div>

              <RegistrationSelectField
                label="Specialisation*"
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                options={["Audit", "Tax", "Advisory"]}
                className="select-default"
              />

              <RegistrationInputField
                label="ICAI Membership Number*"
                name="icai"
                value={formData.icai}
                onChange={handleChange}
              />

              <RegistrationInputField
                label="PAN Card Number*"
                name="pan"
                value={formData.pan}
                onChange={handleChange}
              />

              <RegistrationInputField
                label="Password*"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />

              <RegistrationInputField
                label="Confirm Password*"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />

              <Checkbox
                label=" I agree to the Terms of Services and Privacy Policy"
                checked={formData.agree}
                onChange={(e) =>
                  setFormData({ ...formData, agree: e.target.checked })
                }
              />

              <Button
                text="Submit"
                onClick={handleSubmit}
                className="submit-btn"
              />

              <p className="login-link">
                Already have an account?{" "}
                <span className="login-btn" onClick={() => navigate("/")}>
                  Login
                </span>
              </p>
            </>
          )}

          {/* Personal Customer Form */}
          {formData.registerAs === "Customer (Personal)" && (
            <CustomerPersonalForm
              formData={formData}
              handleChange={handleChange}
              handleDobChange={handleDobChange}
              handleSubmit={handleSubmit}
              navigate={navigate}
              setFormData={setFormData}
            />
          )}

          {/* Business Customer Form */}
          {formData.registerAs === "Customer (Business)" && (
            <CustomerBusinessForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              setFormData={setFormData}
            />
          )}
        </div>

        <div className="right-section">
          <img src={illustration} alt="Illustration" />
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;
