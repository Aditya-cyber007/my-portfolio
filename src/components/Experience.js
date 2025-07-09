import React from 'react';
import '../styles/Experience.css';
import { FaBriefcase, FaUsers, FaAward } from 'react-icons/fa';

const experiences = [
  {
    title: 'Junior Partner',
    org: 'The Apex Circle (TAC)',
    date: 'Jan 2025 – Present',
    details: [
      'Participated in over 15 hackathons and technical events, collaborating with peers to build innovative solutions.',
      'Mentored juniors by sharing knowledge, guiding them in projects, and fostering a strong tech community.'
    ],
    icon: <FaBriefcase />,
  },
  {
    title: 'Technical Executive',
    org: 'Computer Society of India, CU Student Branch',
    date: 'Nov 2024 – Present',
    details: [
      'Organized 5+ workshops, hackathons, and competitions to enhance student learning and engagement.',
      'Coordinated with faculty and industry experts to bring technical opportunities to students.'
    ],
    icon: <FaUsers />,
  },
  {
    title: 'AMCAT 2nd Rank Holder',
    org: 'Chandigarh University',
    date: 'Sept 2024',
    details: [
      'Secured 2nd rank in AMCAT among 5500+ peers, showcasing strong analytical and problem-solving skills.',
      'Demonstrated excellence in aptitude, coding, and domain-specific assessments, outperforming competition.'
    ],
    icon: <FaAward />,
  },
];

const Experience = () => {
  return (
    <section className="experience-section" id="experiences">
      <h2 className="experience-title">Leadership & Involvement</h2>
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
