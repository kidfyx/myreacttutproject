import React from 'react';
import logo from '../../logo.svg';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Welcome to My React App</h1>
    </header>
  );
}
export default Header;