import React from "react";
import "./RegistrationInputField.css";

const RegistrationInputField = ({
  label,
  name,
  value,
  onChange,
  type = "text",
}) => {
  return (
    <div className="floating-input-container">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
      <label className={value ? "filled" : ""}>{label}</label>
    </div>
  );
};

export default RegistrationInputField;
