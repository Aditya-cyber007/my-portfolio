import React from 'react';
import { ReactTyped } from 'react-typed';
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import '../styles/Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <p className="intro-text">Hi, my name is</p>
      <h1 className="hero-name">
        Aditya Pratap Singh<span className="dot">.</span>
      </h1>

      <h2 className="typed-text">
        <ReactTyped
          strings={[
            'Software Engineer.',
            'React Developer.',
            'I build things for the web.',
            'I solve real problems.',
          ]}
          typeSpeed={48}
          backSpeed={28}
          backDelay={1400}
          loop
        />
      </h2>

      <p className="hero-summary">
        Software Engineer at GlobalLogic · 3+ years building scalable React applications
        used by 15K+ users. TypeScript · Redux Toolkit · GraphQL · Node.js.
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="btn primary">View My Work</a>
        <a
          href={`${process.env.PUBLIC_URL}/AdityaSinghResume.pdf`}
          download
          className="btn secondary"
        >
          <FaDownload /> Download CV
        </a>
      </div>

      <div className="hero-socials">
        <a
          href="https://github.com/Aditya-cyber007"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/adityapratap00/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:adityapratap620@gmail.com"
          className="social-icon"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
      </div>

      <a href="#about" className="scroll-down" aria-label="Scroll down">
        <span className="scroll-icon"><FaChevronDown /></span>
      </a>
    </section>
  );
}

export default Hero;
