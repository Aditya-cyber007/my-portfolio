import React from 'react';
import '../styles/Projects.css';

const projects = [
  {
    title: 'ApplyBoard – AI Job Tracker',
    description: 'AI-powered Kanban board to track job applications with Gemini ATS scoring, PDF resume parsing, drag-and-drop columns, and Clerk authentication. Built with Next.js 16 and deployed on Vercel.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
    liveLink: 'https://applyboard-alpha.vercel.app',
    detailsLink: 'https://github.com/Aditya-cyber007/applyboard',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'Clerk', 'Gemini AI', 'Tailwind CSS'],
  },
  {
    title: 'Employee Performance Review Portal',
    description: 'Built a performance review portal with role-based access, review workflows, and feedback management. Designed user-facing dashboard and implemented secure backend for evaluations and tracking.',
    image: 'https://plus.unsplash.com/premium_photo-1661306487606-94ca8a6dfe10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyZm9ybWFuY2V8ZW58MHx8MHx8fDA%3D',
    liveLink: '#',
    detailsLink: 'https://github.com/Aditya-cyber007/Employee-Performance-Review-Portal',
    techStack: ['React', 'Redux', 'Tailwind CSS', 'Node', 'Express', 'PostgreSQL'],
  },
  {
    title: 'Donation Marketplace (KindKart)',
    description: 'Built a community platform for donating and requesting usable items like books, clothes, and gadgets. Designed user and admin workflows for listing, browsing, and moderating donations without payment.',
    image: 'https://plus.unsplash.com/premium_photo-1661962834814-2086d028cda1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fERvbmF0aW9uJTIwQXBwfGVufDB8fDB8fHww',
    liveLink: '#',
    detailsLink: 'https://github.com/Aditya-cyber007/Donation-Marketplace-KindKart-App-',
    techStack: ['React', 'Redux', 'Tailwind CSS', 'Node', 'Express', 'PostgreSQL'],
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">EXPLORE MY CREATIONS</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
              loading="lazy"
            />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <div className="tech-stack">
              {project.techStack.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>

            <div className="project-links">
              {project.liveLink !== '#' ? (
                <a href={project.liveLink} target="_blank" rel="noreferrer" className="live-link">Live Demo</a>
              ) : (
                <span className="live-link disabled">Live Demo</span>
              )}
              <a href={project.detailsLink} target="_blank" rel="noreferrer" className="details-button">GitHub Repo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
