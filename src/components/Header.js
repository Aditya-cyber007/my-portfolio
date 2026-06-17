import React, { useState, useEffect, useRef } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      // Hide when scrolling down past 80px, show when scrolling up
      if (currentY > lastScrollY.current && currentY > 80) {
        setHidden(true);
        setMenuOpen(false); // close mobile menu when hiding
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleToggle = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const scrollTo = (e, sectionId) => {
    e.preventDefault();
    closeMenu();
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (!section) return;
      const headerH = 64;
      const top = section.getBoundingClientRect().top + window.scrollY - headerH;
      window.scrollTo({ top, behavior: 'smooth' });
    }, menuOpen ? 200 : 0); // wait for mobile menu to close
  };

  return (
    <header className={`header${hidden ? ' header--hidden' : ''}`}>
      <span className="logo">Aditya Pratap</span>

      <nav className={`nav${menuOpen ? ' open' : ''}`}>
        <a href="#home"        onClick={(e) => scrollTo(e, 'home')}>Home</a>
        <a href="#about"       onClick={(e) => scrollTo(e, 'about')}>About</a>
        <a href="#skills"      onClick={(e) => scrollTo(e, 'skills')}>Skills</a>
        <a href="#projects"    onClick={(e) => scrollTo(e, 'projects')}>Projects</a>
        <a href="#experiences" onClick={(e) => scrollTo(e, 'experiences')}>Experience</a>
        <a href="#contact"     onClick={(e) => scrollTo(e, 'contact')}>Contact</a>
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

      <div className={`hamburger${menuOpen ? ' active' : ''}`} onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
