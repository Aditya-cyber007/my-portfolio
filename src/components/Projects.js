import React from 'react';
import '../styles/Projects.css'; // Ensure this file includes the styles mentioned earlier

const projects = [
  {
    title: 'IntervueAI',
    description: 'Real-time mock interviews with AI, no forms or clicks just seamless experience.',
    image: '/images/intervueai.png',
    liveLink: '#',
    detailsLink: '#',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'Blendy',
    description: 'A social app where you can connect in real-time, log in and interact instantly.',
    image: '/images/blendy.png',
    liveLink: '#',
    detailsLink: '#',
    techStack: ['React Native', 'Firebase', 'Tailwind CSS'],
  },
  {
    title: 'WATCHit',
    description: 'A video streaming app made for easy, personalized binge watching.',
    image: '/images/watchit.png',
    liveLink: '#',
    detailsLink: '#',
    techStack: ['Next.js', 'Vercel', 'PostgreSQL'],
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">EXPLORE MY CREATIONS</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            
            <div className="tech-stack">
              {project.techStack.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.liveLink} target="_blank" rel="noreferrer" className="live-link">Live Demo</a>
              <a href={project.detailsLink} className="details-button">Details →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
