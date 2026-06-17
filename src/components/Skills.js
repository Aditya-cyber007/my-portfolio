import React from 'react';
import {
  FaJsSquare, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaDocker,
} from 'react-icons/fa';
import {
  SiBootstrap, SiRedux, SiTypescript, SiTailwindcss, SiExpress,
  SiRubyonrails, SiMongodb, SiFirebase, SiPostgresql, SiMysql,
  SiPostman, SiGithub, SiVercel, SiNextdotjs,
} from 'react-icons/si';
import '../styles/Skills.css';

const categories = [
  {
    label: 'Frontend',
    chips: [
      { icon: <FaHtml5 color="#E34F26" />,     name: 'HTML5' },
      { icon: <FaCss3Alt color="#1572B6" />,    name: 'CSS3' },
      { icon: <FaJsSquare color="#F7DF1E" />,   name: 'JavaScript' },
      { icon: <SiTypescript color="#3178C6" />, name: 'TypeScript' },
      { icon: <FaReact color="#61DAFB" />,      name: 'React' },
      { icon: <SiNextdotjs color="#fff" />,     name: 'Next.js' },
      { icon: <SiRedux color="#764ABC" />,      name: 'Redux' },
      { icon: <SiTailwindcss color="#38B2AC" />,name: 'Tailwind CSS' },
      { icon: <SiBootstrap color="#7952B3" />,  name: 'Bootstrap' },
    ],
  },
  {
    label: 'Backend',
    chips: [
      { icon: <FaNodeJs color="#339933" />,        name: 'Node.js' },
      { icon: <SiExpress color="#ccc" />,          name: 'Express.js' },
      { icon: <SiRubyonrails color="#CC0000" />,   name: 'Ruby on Rails' },
    ],
  },
  {
    label: 'Database',
    chips: [
      { icon: <SiPostgresql color="#4169E1" />, name: 'PostgreSQL' },
      { icon: <SiMysql color="#4479A1" />,       name: 'MySQL' },
      { icon: <SiMongodb color="#47A248" />,     name: 'MongoDB' },
      { icon: <SiFirebase color="#FFCA28" />,    name: 'Firebase' },
    ],
  },
  {
    label: 'Tools & DevOps',
    chips: [
      { icon: <FaGitAlt color="#F1502F" />,   name: 'Git' },
      { icon: <SiGithub color="#ccc" />,       name: 'GitHub' },
      { icon: <SiPostman color="#FF6C37" />,   name: 'Postman' },
      { icon: <FaDocker color="#2496ED" />,    name: 'Docker' },
      { icon: <SiVercel color="#ccc" />,       name: 'Vercel' },
    ],
  },
];

const softSkills = ['Problem Solving', 'System Design', 'Code Review', 'Team Leadership', 'Agile / Scrum', 'Active Listening'];

const Skills = () => (
  <section id="skills" className="skills-section">
    <h2 data-reveal>Tech Arsenal</h2>
    <p className="skills-subtitle" data-reveal="d1">Technologies I work with daily</p>

    <div className="skills-grid-outer">
      {categories.map((cat, i) => (
        <div className="skills-category" key={cat.label} data-reveal={`d${i + 1}`}>
          <h3>{cat.label}</h3>
          <div className="skills-chips">
            {cat.chips.map((c) => (
              <span className="skill-chip" key={c.name}>
                {c.icon} {c.name}
              </span>
            ))}
          </div>
        </div>
      ))}

      <div className="skills-category full-width" data-reveal="d5">
        <h3>Core Competencies</h3>
        <div className="skills-tags">
          {softSkills.map((s) => <span key={s}>{s}</span>)}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
