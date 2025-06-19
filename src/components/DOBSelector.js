import React from 'react';

const days = [...Array(31)].map((_, i) => i + 1);
const months = [...Array(12)].map((_, i) => i + 1);
const years = [...Array(80)].map((_, i) => new Date().getFullYear() - i);

const DOBSelector = ({ dob, setDob }) => {
  return (
    <div className="form-group">
      <label>Date of Birth</label>
      <div className="dob-select">
        <select value={dob.day} onChange={e => setDob({ ...dob, day: e.target.value })}>
          <option>Date</option>
          {days.map(d => <option key={d}>{d}</option>)}
        </select>
        <select value={dob.month} onChange={e => setDob({ ...dob, month: e.target.value })}>
          <option>Month</option>
          {months.map(m => <option key={m}>{m}</option>)}
        </select>
        <select value={dob.year} onChange={e => setDob({ ...dob, year: e.target.value })}>
          <option>Year</option>
          {years.map(y => <option key={y}>{y}</option>)}
        </select>
      </div>
    </div>
  );
};

export default DOBSelector;
