import React from 'react';
import {
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
} from 'react-icons/fa';

import {
  SiBootstrap,
  SiRedux,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiRubyonrails,
  SiMongodb,
  SiFirebase,
  SiPostgresql,
  SiMysql,
  SiPostman,
  SiGithub,
  SiVercel,
} from 'react-icons/si';

import '../styles/Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">My Tech Arsenal</h2>
      <div className='myskills'>


      <div className="skills-category">
        <h3>Frontend</h3>
        <div className="skills-grid">
          <div className="skill-card"><FaHtml5 color="#E34F26" /> HTML5</div>
          <div className="skill-card"><FaCss3Alt color="#1572B6" /> CSS3</div>
          <div className="skill-card"><FaJsSquare color="#F7DF1E" /> JavaScript</div>
          <div className="skill-card"><SiTypescript color="#3178C6" /> TypeScript</div>
          <div className="skill-card"><FaReact color="#61DAFB" /> React</div>
          <div className="skill-card"><SiRedux color="#764ABC" /> Redux</div>
          <div className="skill-card"><SiTailwindcss color="#38B2AC" /> Tailwind CSS</div>
          <div className="skill-card"><SiBootstrap color="#7952B3" /> Bootstrap</div>
        </div>
      </div>

      <div className="skills-category">
        <h3>Backend</h3>
        <div className="skills-grid">
          <div className="skill-card"><FaNodeJs color="#339933" /> Node.js</div>
          <div className="skill-card"><SiExpress color="#fff" /> Express.js</div>
          <div className="skill-card"><SiRubyonrails color="#CC0000" /> Ruby on Rails</div>
        </div>
      </div>

      <div className="skills-category">
        <h3>Database</h3>
        <div className="skills-grid">
          <div className="skill-card"><SiMongodb color="#47A248" /> MongoDB</div>
          <div className="skill-card"><SiFirebase color="#FFCA28" /> Firebase</div>
          <div className="skill-card"><SiPostgresql color="#fff" /> PostgreSQL</div>
          <div className="skill-card"><SiMysql color="#fff" /> MySQL</div>
        </div>
      </div>

      <div className="skills-category">
        <h3>Tools</h3>
        <div className="skills-grid">
          <div className="skill-card"><FaGitAlt color="#F1502F" /> Git</div>
          <div className="skill-card"><SiGithub color="#fff" /> GitHub</div>
          <div className="skill-card"><SiPostman color="#FF6C37" /> Postman</div>
          <div className="skill-card"><FaDocker color="#2496ED" /> Docker</div>
          <div className="skill-card"><SiVercel color="#000000" /> Vercel</div>
        </div>
      </div>

      <div className="skills-category">
        <h3>Core Competencies</h3>
        <div className="skills-tags">
          <span>Problem Solving</span>
          <span>Presentations</span>
          <span>Oratory</span>
          <span>Team Leadership</span>
          <span>Agile Methodologies</span>
        </div>
      </div>
      </div>

    </section>
  );
};

export default Skills;
