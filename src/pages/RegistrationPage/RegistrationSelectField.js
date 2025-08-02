import React from "react";
import "./RegistrationSelectField.css";

const RegistrationSelectField = ({ label, name, value, onChange, options, className }) => (
  <div className="registration-select-group">
    <label>{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className={className}
    >
      <option value="">Select</option>
      {options.map((opt, idx) => (
        <option key={idx} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

export default RegistrationSelectField;
