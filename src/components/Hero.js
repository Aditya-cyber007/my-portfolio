import React from 'react';
import { ReactTyped } from "react-typed";
import { FaDownload } from 'react-icons/fa';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown} from 'react-icons/fa';
import '../styles/Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <p className="intro-text">Hi, my name is</p>
      <h1 className="hero-name">Aditya Pratap Singh<span className="dot">.</span></h1>

      <h2 className="typed-text">
        <ReactTyped
          strings={[
            'I love to code.',
            'I solve problems.',
            'I am a Full Stack Developer.',
            'I build things for the web.',
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
      </h2>

      <p className="hero-summary">
        Innovative Full Stack Developer passionate about creating seamless and impactful web
        solutions. Eager to leverage modern technologies to solve real-world problems and contribute
        to dynamic team environments.
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="btn primary">View My Work</a>
        <a href="/MyResume.pdf" download className="btn secondary">
          <FaDownload /> Download CV
        </a>
      </div>
      <div className="hero-socials">
        <a href="https://github.com/Aditya-cyber007" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/aditya-pratap-singh-b6ba901ba/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedin />
        </a>
        <a
          href="mailto:adityapratap620@gmail.com"
          className="social-icon"
        >
          <FaEnvelope />
        </a> 
      </div>

      <div>
        <a href="#about" className="scroll-down">
        <span className="scroll-icon"><FaChevronDown /></span>
        </a>
      </div>


    </section>
  );
}

export default Hero;
