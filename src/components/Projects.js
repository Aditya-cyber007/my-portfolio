import React from 'react';
import '../styles/Projects.css';

const projects = [
  {
    title: 'ApplyBoard – AI Job Tracker',
    description: 'AI-powered Kanban board to track job applications end-to-end. Features Gemini ATS scoring, PDF resume parsing, drag-and-drop columns, Clerk auth, and Supabase persistence.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&auto=format&fit=crop&q=70',
    liveLink: 'https://applyboard-alpha.vercel.app',
    detailsLink: 'https://github.com/Aditya-cyber007/applyboard',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'Clerk', 'Gemini AI', 'Tailwind'],
  },
  {
    title: 'Employee Performance Portal',
    description: 'Role-based performance review platform with configurable review workflows, feedback loops, and manager dashboards. Secure REST API backend with PostgreSQL.',
    image: 'https://plus.unsplash.com/premium_photo-1661306487606-94ca8a6dfe10?w=600&auto=format&fit=crop&q=70',
    liveLink: '#',
    detailsLink: 'https://github.com/Aditya-cyber007/Employee-Performance-Review-Portal',
    techStack: ['React', 'Redux', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind'],
  },
  {
    title: 'KindKart – Donation Marketplace',
    description: 'Community platform where users donate and request items like books, clothes, and gadgets. Includes admin moderation, browse/search, and listing workflows.',
    image: 'https://plus.unsplash.com/premium_photo-1661962834814-2086d028cda1?w=600&auto=format&fit=crop&q=70',
    liveLink: '#',
    detailsLink: 'https://github.com/Aditya-cyber007/Donation-Marketplace-KindKart-App-',
    techStack: ['React', 'Redux', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind'],
  },
];

const Projects = () => (
  <section className="projects-section" id="projects">
    <h2 data-reveal>Featured Projects</h2>
    <p className="projects-subtitle" data-reveal="d1">Things I&apos;ve built</p>

    <div className="projects-grid">
      {projects.map((project, index) => (
        <div className="project-card" key={index} data-reveal={`d${index + 1}`}>
          <div className="project-image-wrap">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
              loading="lazy"
            />
            <div className="project-image-overlay" />
          </div>

          <div className="project-body">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <div className="tech-stack">
              {project.techStack.map((tech) => (
                <span className="tech-tag" key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-links">
              {project.liveLink !== '#' ? (
                <a href={project.liveLink} target="_blank" rel="noreferrer" className="live-link">
                  ↗ Live Demo
                </a>
              ) : (
                <span className="live-link disabled">Live Demo</span>
              )}
              <a href={project.detailsLink} target="_blank" rel="noreferrer" className="details-button">
                GitHub Repo
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
