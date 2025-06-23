import React, { useState } from 'react';
import './Sidebar.css';

// ✅ Import JSON
import sidebarItems from '../Config/menuItems.json';

// ✅ Import all icons as an object
import dashboard from '../assets/Sidebar/dashboard.png';
import clientmanagement from '../assets/Sidebar/cm.png';
import dm from '../assets/Sidebar/Dm.png';
import GstF from '../assets/Sidebar/GstF.png';
import QF from '../assets/Sidebar/Q&F.png';
import pay from '../assets/Sidebar/pay.png';
import rep from '../assets/Sidebar/rep.png';
import Supp from '../assets/Sidebar/Supp.png';
import set from '../assets/Sidebar/set.png';

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
};

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const handleItemClick = (itemText) => {
    setActiveItem(itemText);
  };

  return (
    <aside className="sidebar">
      <nav>
        <ul>
          {sidebarItems.map((item) => (
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
      <div className="logout">Log out</div>
    </aside>
  );
};

export default Sidebar;
