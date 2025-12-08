import React from 'react';
import logo from './logo.svg';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="logo" />
      <h1>The portfolio of Sean M Jones</h1>
    </header>
  );
}
export default Header;