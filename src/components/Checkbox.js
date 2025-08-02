const Checkbox = ({ label, checked, onChange }) => (
  <div className="checkbox-group">
    <input type="checkbox" checked={checked} onChange={onChange} />
    <label>{label}</label>
  </div>
);

export default Checkbox;
