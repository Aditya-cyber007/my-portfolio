import React from 'react';
import '../styles/Experience.css';

const experiences = [
  {
    title: 'Software Engineer',
    org: 'GlobalLogic, Noida',
    date: 'Oct 2025 – Present',
    details: [
      'Build and maintain large-scale React + TypeScript applications supporting 15K+ active users.',
      'Implement advanced state management with Redux Toolkit and RTK Query for complex data workflows.',
      'Integrate secure REST and GraphQL services with centralised authentication and logging.',
      'Automate build, testing, and release pipelines using Docker and GitHub Actions.',
      'Conduct PR reviews, mentor junior developers, and drive adoption of engineering best practices.',
    ],
  },
  {
    title: 'Associate Software Engineer',
    org: 'GlobalLogic, Noida',
    date: 'Jul 2024 – Sep 2025',
    details: [
      'Delivered 12+ customer-facing features using React, Redux Toolkit, TypeScript, and GraphQL — boosted platform engagement by 35%.',
      'Integrated GraphQL and RESTful APIs to optimise data flow, cutting page load time by 28%.',
      'Automated deployments with Docker and GitHub Actions, shortening release cycles from 7 days to 1 day.',
      'Mentored 3 graduate trainees; 2 promoted to Associate Engineer within 9 months.',
    ],
  },
  {
    title: 'Trainee Software Engineer',
    org: 'GlobalLogic, Noida',
    date: 'Sep 2023 – Jun 2024',
    details: [
      'Fixed 60+ bugs and streamlined UI workflows, reducing support tickets by 18%.',
      'Built and tested RESTful and GraphQL APIs; improved average API query latency by 30%.',
      'Consistently met sprint goals and presented deliverables in Agile ceremonies tracked via JIRA.',
    ],
  },
  {
    title: 'Software Engineer Trainee (Internship)',
    org: 'GlobalLogic, Noida',
    date: 'Feb 2023 – Aug 2023',
    details: [
      'Completed an intensive React + Redux training programme, building responsive UIs with Tailwind CSS and Styled Components.',
      'Practised modern developer workflows using Git, GitHub, Docker, and Postman for collaboration and continuous delivery.',
    ],
  },
];

const Experience = () => (
  <section className="experience-section" id="experiences">
    <h2 data-reveal>Experience</h2>
    <p className="experience-subtitle" data-reveal="d1">Where I&apos;ve worked</p>

    <div className="timeline">
      {experiences.map((exp, index) => (
        <div className="timeline-item" key={index} data-reveal={`d${Math.min(index + 1, 5)}`}>
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
