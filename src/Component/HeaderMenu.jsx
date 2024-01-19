import React from 'react';
import './HeaderMenu.css';

const HeaderMenu = () => {
  return (
    <div className="header-menu">
      <div className="logo">Time Trackign App</div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>About</li>
      </ul>
    </div>
  );
};

export default HeaderMenu;
