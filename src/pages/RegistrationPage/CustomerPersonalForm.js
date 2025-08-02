import React from "react";
import RegistrationInputField from "./RegistrationInputField";
import RegistrationSelectField from "./RegistrationSelectField";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";

const CustomerPersonalForm = ({ formData, handleChange, handleDobChange, handleSubmit, navigate, setFormData }) => {
  return (
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
        label="Designation"
        name="designation"
        value={formData.designation}
        onChange={handleChange}
      />

      <RegistrationInputField
        label="Residential Address"
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

      <RegistrationInputField
        label="Aadhaar Number*"
        name="aadhaar"
        value={formData.aadhaar}
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
        label=" I agree to the Terms Of Services and Privacy Policy"
        checked={formData.agree}
        onChange={(e) =>
          setFormData({ ...formData, agree: e.target.checked })
        }
      />

      <Button text="Submit" onClick={handleSubmit} className="submit-btn" />

      <p className="login-link">
        Already have an account?{" "}
        <span className="login-btn" onClick={() => navigate("/")}>
          Login
        </span>
      </p>
    </>
  );
};

export default CustomerPersonalForm;
