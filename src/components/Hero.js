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
            'Full Stack Developer.',
            'I build things for the web.',
            'I love to code.',
            'I solve real problems.',
          ]}
          typeSpeed={48}
          backSpeed={28}
          backDelay={1400}
          loop
        />
      </h2>

      <p className="hero-summary">
        3+ years building scalable web applications at GlobalLogic India.
        React · TypeScript · Node.js · Next.js · PostgreSQL.
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
          href="https://www.linkedin.com/in/aditya-pratap-singh-b6ba901ba/"
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
