import '../styles/About.css'; 
const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Hello! I'm <strong>Aditya</strong>, a driven Full Stack Developer with a strong foundation in computer science and a knack for crafting efficient, user-centric applications. My journey into tech is fueled by a desire to learn, innovate, and contribute to projects that make a difference. I thrive in collaborative environments and am always excited to tackle new challenges.
        </p>
      </div>
      <div className="education-section">
  <h3>Education</h3>
  <div className="education-cards">

    <div className="edu-card">
      <h4>🎓 GLA University Mathura</h4>
      <p>Bachelor of Engineering in Computer Science</p>
      <p>Aug 2019 – July 2023</p>
      <p className="highlight">CGPA: 8.2/10</p>
    </div>

    <div className="edu-card">
      <h4>🏫 U.N.S Sr. Sec. School</h4>
      <p>Class 12th CBSE</p>
      <p>April 2017 – May 2019</p>
      <p className="highlight">84.4%</p>
    </div>

    <div className="edu-card">
      <h4>🏫 Prasad International School</h4>
      <p>Class 10th CBSE</p>
      <p>April 2015 – May 2017</p>
      <p className="highlight">CGPA: 9.2/10</p>
    </div>

  </div>
</div>

    </section>
  );
};

export default About;

