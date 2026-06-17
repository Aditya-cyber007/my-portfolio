import React from 'react';
import {
  FaJsSquare, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaDocker,
} from 'react-icons/fa';
import {
  SiTypescript, SiRedux, SiTailwindcss, SiMui, SiStyledcomponents,
  SiGraphql, SiPostgresql, SiMongodb, SiMysql, SiFirebase,
  SiJest, SiGithub, SiGithubactions, SiPostman, SiJira,
  SiWebpack, SiVite, SiNextdotjs, SiExpress,
} from 'react-icons/si';
import '../styles/Skills.css';

const categories = [
  {
    label: 'Frontend',
    chips: [
      { icon: <FaReact color="#61DAFB" />,       name: 'React.js' },
      { icon: <SiTypescript color="#3178C6" />,  name: 'TypeScript' },
      { icon: <FaJsSquare color="#F7DF1E" />,    name: 'JavaScript' },
      { icon: <SiRedux color="#764ABC" />,        name: 'Redux Toolkit' },
      { icon: <SiRedux color="#764ABC" />,        name: 'RTK Query' },
      { icon: <FaReact color="#61DAFB" />,        name: 'React Router' },
      { icon: <FaReact color="#61DAFB" />,        name: 'Context API' },
      { icon: <SiNextdotjs color="#fff" />,       name: 'Next.js' },
    ],
  },
  {
    label: 'UI',
    chips: [
      { icon: <FaHtml5 color="#E34F26" />,          name: 'HTML5' },
      { icon: <FaCss3Alt color="#1572B6" />,         name: 'CSS3' },
      { icon: <SiTailwindcss color="#38B2AC" />,     name: 'Tailwind CSS' },
      { icon: <SiMui color="#007FFF" />,             name: 'Material UI' },
      { icon: <SiStyledcomponents color="#DB7093" />,name: 'Styled Components' },
    ],
  },
  {
    label: 'Backend',
    chips: [
      { icon: <FaNodeJs color="#339933" />,    name: 'Node.js' },
      { icon: <SiExpress color="#ccc" />,       name: 'Express.js' },
      { icon: <SiGraphql color="#E10098" />,    name: 'GraphQL' },
      { icon: null,                             name: 'REST APIs' },
      { icon: null,                             name: 'JWT' },
    ],
  },
  {
    label: 'Database',
    chips: [
      { icon: <SiPostgresql color="#4169E1" />, name: 'PostgreSQL' },
      { icon: <SiMongodb color="#47A248" />,    name: 'MongoDB' },
      { icon: <SiMysql color="#4479A1" />,      name: 'MySQL' },
      { icon: <SiFirebase color="#FFCA28" />,   name: 'Firebase' },
    ],
  },
  {
    label: 'Testing',
    chips: [
      { icon: <SiJest color="#C21325" />,  name: 'Jest' },
      { icon: <FaReact color="#61DAFB" />, name: 'React Testing Library' },
      { icon: null,                         name: 'Unit Testing' },
    ],
  },
  {
    label: 'Tools & DevOps',
    chips: [
      { icon: <FaGitAlt color="#F1502F" />,          name: 'Git' },
      { icon: <SiGithub color="#ccc" />,              name: 'GitHub' },
      { icon: <FaDocker color="#2496ED" />,           name: 'Docker' },
      { icon: <SiGithubactions color="#2088FF" />,    name: 'GitHub Actions' },
      { icon: <SiPostman color="#FF6C37" />,          name: 'Postman' },
      { icon: <SiJira color="#0052CC" />,             name: 'Jira' },
      { icon: <SiVite color="#646CFF" />,             name: 'Vite' },
      { icon: <SiWebpack color="#8DD6F9" />,          name: 'Webpack' },
    ],
  },
];

const softSkills = [
  'State Management', 'Performance Optimisation', 'API Integration',
  'Code Quality', 'Agile / Scrum', 'Code Review', 'System Design',
];

const Skills = () => (
  <section id="skills" className="skills-section">
    <h2 data-reveal>Tech Arsenal</h2>
    <p className="skills-subtitle" data-reveal="d1">Technologies I work with daily</p>

    <div className="skills-grid-outer">
      {categories.map((cat, i) => (
        <div className="skills-category" key={cat.label} data-reveal={`d${Math.min(i + 1, 5)}`}>
          <h3>{cat.label}</h3>
          <div className="skills-chips">
            {cat.chips.map((c) => (
              <span className="skill-chip" key={c.name}>
                {c.icon && c.icon} {c.name}
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
