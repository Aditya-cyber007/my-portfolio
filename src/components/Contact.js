import React from 'react';
import '../styles/Contact.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => (
  <section className="contact-section" id="contact">
    <h2 data-reveal>Get In Touch</h2>
    <p className="contact-subtitle" data-reveal="d1">I&apos;m open to new opportunities</p>

    <p className="contact-description" data-reveal="d2">
      Whether you have a project in mind, a role to discuss, or just want to say hi —
      my inbox is always open. I&apos;ll get back to you as soon as I can.
    </p>

    <a href="mailto:adityapratap620@gmail.com" className="contact-button" data-reveal="d3">
      Say Hello
    </a>

    <div className="contact-icons" data-reveal="d4">
      <a href="https://www.linkedin.com/in/adityapratap00/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedin />
      </a>
      <a href="https://github.com/Aditya-cyber007" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FaGithub />
      </a>
      <a href="mailto:adityapratap620@gmail.com" aria-label="Email">
        <FaEnvelope />
      </a>
    </div>
  </section>
);

export default Contact;
