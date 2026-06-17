import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content" data-reveal>
        <h2>About Me</h2>
        <p>
          Hello! I&apos;m <strong>Aditya</strong> — a Full-Stack Developer with <strong>3+ years</strong> of
          hands-on experience building scalable, production-grade web applications at GlobalLogic India.
          I specialise in <strong>React</strong>, <strong>TypeScript</strong>, <strong>Node.js</strong>,
          <strong> Next.js</strong>, and <strong>PostgreSQL</strong>, crafting clean architectures,
          responsive interfaces, and robust backend services. I thrive in agile teams, take ownership
          from design to deployment, and constantly chase better performance and developer experience.
        </p>
      </div>

      <div className="education-section">
        <h3 data-reveal>Education</h3>
        <div className="education-cards">
          <div className="edu-card" data-reveal="d1">
            <h4>🎓 GLA University, Mathura</h4>
            <p>B.E. in Computer Science &amp; Engineering</p>
            <p>Aug 2019 – Jul 2023</p>
            <p className="highlight">CGPA: 8.2 / 10</p>
          </div>

          <div className="edu-card" data-reveal="d2">
            <h4>🏫 U.N.S Sr. Sec. School</h4>
            <p>Class XII — CBSE</p>
            <p>Apr 2017 – May 2019</p>
            <p className="highlight">84.4%</p>
          </div>

          <div className="edu-card" data-reveal="d3">
            <h4>🏫 Prasad International School</h4>
            <p>Class X — CBSE</p>
            <p>Apr 2015 – May 2017</p>
            <p className="highlight">CGPA: 9.2 / 10</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
