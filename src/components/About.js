import React from "react";
import photo from "../images/me.png"; // <-- put your photo at src/images/me.jpg (or change the path)

const About = () => {
  return (
    <section id="about" className="about animate-on-scroll">
      <div className="container about-content">
        <div className="about-text">
          <h2><span className="section-index">01.</span> About Me</h2>

          <p>
            As an aspiring software developer and programmer, I am proficient in languages such as C/C++, JavaScript, and Python, with hands-on experience in building applications and systems using these languages. Moreover, I have expertise in utilizing frameworks like React.js, Node.js, and Express.js to develop robust, scalable, and efficient solutions to real-world problems.
          </p>
          <p>I’m equally passionate about exploring the intelligence hidden within data. With a strong foundation in Machine Learning, Deep Learning, Computer Vision, and Natural Language Processing, I use data-driven techniques to uncover patterns and insights. Combined with practical exposure to cloud computing and GitHub-based collaboration, I bring together modern tools to design intelligent solutions that bridge technology and innovation.</p>
          <a className="btn" href="https://drive.google.com/file/d/1ULrnl-GVPGMshX4B7IEtdAKg9yGG5Jk2/view?usp=sharing" >Resume</a>
          {/* <h3>Here are a few technologies I’ve been working with recently:</h3>

          <div className="skills-grid">
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>
            <ul>
              <li>TypeScript</li>
              <li>Eleventy</li>
              <li>WordPress</li>
            </ul>
          </div> */}
        </div>

        {/* Photo column */}
        <div className="about-photo-wrap">
          <div className="photo-frame" aria-hidden="true">
            <img src={photo} alt="Rijit Banerjee" className="photo-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
