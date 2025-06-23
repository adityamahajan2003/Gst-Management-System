import React from 'react';
import './Topbar.css';
import Logo from './Logo';

const Topbar = () => {
  return (
    <> 
    <header className="topbar">
      <Logo />
      <input type="text" placeholder="Search" className="search-bar" />
      <div className="icons">
        <span>🔔</span>
        <span>💬</span>
        <button className="report-btn">View Report</button>
      </div>
    </header>
    </>
  );
};

export default Topbar;
