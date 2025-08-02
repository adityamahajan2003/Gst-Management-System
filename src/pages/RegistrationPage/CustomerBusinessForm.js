// CustomerBusinessForm.js
import React from "react";
import RegistrationInputField from "./RegistrationInputField";
import RegistrationSelectField from "./RegistrationSelectField";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";

const CustomerBusinessForm = ({
  formData,
  handleChange,
  handleSubmit,
  setFormData,
}) => {
  return (
    <>
      <RegistrationInputField
        label="Business Name*"
        name="businessName"
        value={formData.businessName}
        onChange={handleChange}
      />

      <div className="row">
        <RegistrationSelectField
          label="Business Type*"
          name="businessType"
          value={formData.businessType}
          onChange={handleChange}
          options={["Private Ltd", "Partnership", "LLP", "Sole Proprietor"]}
          className="select-default"
        />
        <RegistrationInputField
          label="No. of employees*"
          name="numEmployees"
          value={formData.numEmployees}
          onChange={handleChange}
        />
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
        label="Business Address*"
        name="businessAddress"
        value={formData.businessAddress}
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
        label="PAN Card Number*"
        name="pan"
        value={formData.pan}
        onChange={handleChange}
      />

      <RegistrationInputField
        label="Company Incorporation Number*"
        name="companyIncorp"
        value={formData.companyIncorp}
        onChange={handleChange}
      />

      <RegistrationInputField
        label="GSTIN*"
        name="gstin"
        value={formData.gstin}
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

      <Button
        text="Submit"
        onClick={handleSubmit}
        className="submit-btn"
      />
    </>
  );
};

export default CustomerBusinessForm;
