import React from 'react';
import './Footer.css';

const today = new Date();

const Footer = () => {
  return (
    <footer className="footer">
      <h1>&copy;{today.getFullYear()} Sean M Jones - All rights reserved</h1>
    </footer>
  );
}
export default Footer;