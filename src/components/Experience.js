import React from 'react';
import '../styles/Experience.css';
import { FaUserTie, FaUserGraduate, FaLaptopCode } from 'react-icons/fa';

const experiences = [
  {
    title: 'Associate Software Engineer',
    org: 'GlobalLogic India',
    date: 'Jul 2024 – Present',
    details: [
      'Developing full-stack web applications, delivering new features and resolving bugs using modern tech stack.',
      'Integrated Node.js, Express.js, and PostgreSQL into backend services and internal tools.',
    ],
    icon: <FaUserTie  />,
  },
  {
    title: 'Trainee Software Engineer',
    org: 'GlobalLogic India',
    date: 'Sep 2023 – Jun 2024',
    details: [
      'Contributed to a client-facing app using Redux Toolkit, TypeScript, Styled Components, and Material UI.',
      'Followed agile processes and collaborated using Git and GitHub in cross-functional sprints.',
    ],
    icon: <FaLaptopCode  />,
  },
  {
    title: 'Software Engineer Intern',
    org: 'GlobalLogic India',
    date: 'Feb 2023 – Jun 2023',
    details: [
      'Built mini-projects using React, Redux (basics), Bootstrap, HTML5, CSS3, and JSON Server to simulate full-stack development.',
    ],
    icon: <FaUserGraduate  />,
  },
];

const Experience = () => {
  return (
    <section className="experience-section" id="experiences">
      <h2 className="experience-title">Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-icon">{exp.icon}</div>
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
};

export default Experience;
