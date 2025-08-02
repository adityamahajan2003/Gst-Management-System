import React from 'react';
import './InputField.css';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';

const InputField = ({ type = "text", name, value, onChange, placeholder }) => {
  const renderIcon = () => {
    if (type === 'email') return <MdEmail className="input-icon" />;
    if (type === 'password') return <RiLockPasswordFill className="input-icon" />;
    return null;
  };

  return (
    <div className="input-group">
      {renderIcon()}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default InputField;
