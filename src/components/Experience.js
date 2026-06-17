import React from 'react';
import '../styles/Experience.css';

const experiences = [
  {
    title: 'Associate Software Engineer',
    org: 'GlobalLogic India',
    date: 'Jul 2024 – Present',
    details: [
      'Own end-to-end feature development across full-stack applications using React, TypeScript, Node.js, and PostgreSQL — from requirements to production deployment.',
      'Design and build RESTful APIs with Node.js/Express, handling database schema design, query optimisation, and third-party service integrations.',
      'Drive code reviews, contribute to technical discussions, and help establish engineering best practices within cross-functional agile squads.',
    ],
  },
  {
    title: 'Trainee Software Engineer',
    org: 'GlobalLogic India',
    date: 'Sep 2023 – Jun 2024',
    details: [
      'Contributed to a high-traffic, client-facing application built with React, Redux Toolkit, TypeScript, Styled Components, and Material UI.',
      'Delivered user stories consistently across sprints, collaborating with designers, QA engineers, and backend teams via Git/GitHub workflows.',
      'Identified and abstracted repeated UI patterns into reusable components, improving consistency and reducing duplication across the codebase.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    org: 'GlobalLogic India',
    date: 'Feb 2023 – Jun 2023',
    details: [
      'Built multiple full-stack projects using React, Redux, Bootstrap, HTML5, CSS3, and JSON Server — simulating real-world development workflows.',
      'Completed an intensive training programme covering data structures, algorithms, and modern web technologies; received a strong performance evaluation.',
    ],
  },
];

const Experience = () => (
  <section className="experience-section" id="experiences">
    <h2 data-reveal>Experience</h2>
    <p className="experience-subtitle" data-reveal="d1">Where I&apos;ve worked</p>

    <div className="timeline">
      {experiences.map((exp, index) => (
        <div className="timeline-item" key={index} data-reveal={`d${index + 1}`}>
          <div className="timeline-dot" />
          <div className="timeline-content">
            <div className="timeline-header">
              <h3>{exp.title}</h3>
              <span className="timeline-date">{exp.date}</span>
            </div>
            <p className="timeline-org">{exp.org}</p>
            <ul>
              {exp.details.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
