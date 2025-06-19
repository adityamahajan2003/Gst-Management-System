import React from 'react';
import './InputField.css';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';

const InputField = ({ label, type = "text", name, value, onChange, placeholder }) => {
  const renderIcon = () => {
    if (type === 'email') return <MdEmail className="input-icon" />;
    if (type === 'password') return <RiLockPasswordFill className="input-icon" />;
    return null;
  };

  return (
    <div className="form-group">
      {label && <label htmlFor={name}>{label}</label>}
      <div className="input-wrapper">
        {renderIcon()}
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder || label}
          required
        />
      </div>
    </div>
  );
};

export default InputField;
