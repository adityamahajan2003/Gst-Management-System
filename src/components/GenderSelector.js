import React from 'react';

const GenderSelector = ({ value, onChange }) => (
  <div className="form-group">
    <label>Gender</label>
    <div className="gender-options">
      <label><input type="radio" value="Male" checked={value === "Male"} onChange={onChange} /> Male</label>
      <label><input type="radio" value="Female" checked={value === "Female"} onChange={onChange} /> Female</label>
    </div>
  </div>
);

export default GenderSelector;
