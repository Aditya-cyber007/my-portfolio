import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    closeMenu();

    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50); // small delay (can try 100ms too)
  };



  return (
    <header className="header" >
      <h1 className="logo">Aditya Pratap</h1>

      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={(e) => handleScroll(e, 'home')}>Home</a>
        <a href="#about" onClick={(e) => handleScroll(e, 'about')}>About</a>
        <a href="#skills" onClick={(e) => handleScroll(e, 'skills')}>Skills</a>
        <a href="#projects" onClick={(e) => handleScroll(e, 'projects')}>Projects</a>
<       a href="#experiences" onClick={(e) => handleScroll(e, 'experiences')}>Experience</a>
        <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact</a>

        <a
          href={`${process.env.PUBLIC_URL}/AdityaSinghResume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
          onClick={closeMenu}
        >
          Resume
        </a>
      </nav>

      <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
