import React, { useState } from 'react';
import './Sidebar.css';
import defaultMenuItems from '../Config/menuItems.json';
import personalMenuItems from '../Config/personalMenuItems.json';
import businessMenuItems from '../Config/businessMenuItems.json';

// Import all icons
import dashboard from '../assets/Sidebar/dashboard.png';
import clientmanagement from '../assets/Sidebar/cm.png';
import dm from '../assets/Sidebar/Dm.png';
import GstF from '../assets/Sidebar/GstF.png';
import QF from '../assets/Sidebar/Q&F.png';
import pay from '../assets/Sidebar/pay.png';
import rep from '../assets/Sidebar/rep.png';
import Supp from '../assets/Sidebar/Supp.png';
import set from '../assets/Sidebar/set.png';
import logoutIcon from '../assets/Sidebar/logout.png';

const iconMap = {
  dashboard,
  clientmanagement,
  dm,
  GstF,
  QF,
  pay,
  rep,
  Supp,
  set,
  logout: logoutIcon,
};

const Sidebar = ({ onLogout, onSelectPage, sidebarType = 'default' }) => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const handleItemClick = (itemText) => {
    setActiveItem(itemText);
    onSelectPage(itemText);
  };

  // Correctly select menu items based on sidebarType
  let menuItems = defaultMenuItems;
  if (sidebarType === 'personal') {
    menuItems = personalMenuItems;
  } else if (sidebarType === 'business') {
    menuItems = businessMenuItems;
  }

  return (
    <aside className="sidebar">
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={activeItem === item.text ? 'active' : ''}
              onClick={() => handleItemClick(item.text)}
            >
              <img
                src={iconMap[item.icon]}
                alt={item.text}
                className="sidebar-icon"
              />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </nav>

      <div className="logout" onClick={onLogout}>
        <img src={logoutIcon} alt="Logout" className="sidebar-icon" />
        <span>Log out</span>
      </div>
    </aside>
  );
};

export default Sidebar;
