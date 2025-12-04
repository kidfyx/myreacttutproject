import React from 'react';
import './NavBar.css';
import { AppBar, Toolbar, Button } from '@mui/material';

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="nav-links">
          <Button color="inherit" href="/">Home</Button>
          <Button color="inherit" href="/about">About</Button>
          <Button color="inherit" href="/projects">Projects</Button>
          <Button color="inherit" href="/contact">Contact</Button>
        </div>
      </Toolbar>
    </AppBar>


  );
}
export default NavBar;