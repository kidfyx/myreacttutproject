import React from 'react';
import './NavBar.css';
import { AppBar } from '@mui/material';

const NavBar = () => {
  return (
    <AppBar className="navbar">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>    
        </ul>
    </AppBar>
  );
}
export default NavBar;