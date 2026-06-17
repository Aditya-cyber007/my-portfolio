import React from 'react';
import '../styles/Footer.css';

const Footer = () => (
  <footer className="footer">
    Designed &amp; built by{' '}
    <a href="https://github.com/Aditya-cyber007" target="_blank" rel="noopener noreferrer">
      Aditya Pratap Singh
    </a>{' '}
    · {new Date().getFullYear()}
  </footer>
);

export default Footer;
