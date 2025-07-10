import React from 'react';
import '../styles/Contact.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-description">
        I'm currently open to new opportunities and collaborations. Whether you have a project in mind, a question, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
      </p>
      <a
        href="https://mail.google.com/chat/u/0/#chat/wt:adityapratap620@gmail.com"
        className="contact-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Say Hello
      </a>

      <div className="contact-icons">
        <a href="https://www.linkedin.com/in/aditya-pratap-singh-b6ba901ba/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Aditya-cyber007" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=adityapratap620@gmail.com"
           target="_blank"
           rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
};

export default Contact;
