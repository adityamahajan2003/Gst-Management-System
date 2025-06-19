import React from 'react';

const Checkbox = ({ label, checked, onChange }) => (
  <div className="form-group checkbox-group">
    <label>
      <input type="checkbox" checked={checked} onChange={onChange} />
      {label}
    </label>
  </div>
);

export default Checkbox;
