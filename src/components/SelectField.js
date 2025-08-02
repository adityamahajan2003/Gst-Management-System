import React from 'react';
import './SelectField.css';

const SelectField = ({ label, options, value, onChange, name }) => (
  <div className="select-field-inline">
    <label htmlFor={name}>{label}</label>
  <select name={name} value={value} onChange={onChange}>
    <option value="">Select</option>
    {options.map((option) => (
      <option key={option} value={option}>{option}</option>
    ))}
  </select>
  </div>
);

export default SelectField;
