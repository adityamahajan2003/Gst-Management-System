import React from 'react';

const SelectField = ({ label, options, value, onChange, name }) => (
  <div className="form-group">
    <label>{label}</label>
    <select value={value} onChange={onChange} name={name} required>
      <option value="">Select</option>
      {options.map((opt, i) => (
        <option key={i} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

export default SelectField;
