import React from "react";
import SocialIcons from "./SocialIcons";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="hero hero-modern">
      <SocialIcons />

      <div className="container hero-inner">
        <div className="intro">
          <h5 className="lead">Hi, my name is</h5>
          <h1 className="big-name">Rijit Banerjee.</h1>

          <h2 className="big-sub">I am a <u>Pro</u>grammer.</h2>

          <p className="hero-blurb">
            I am a technologist passionate about algorithms, systems, and
            interdisciplinary science, driven to create innovative solutions
            that connect ideas across technology, business, and research.
          </p>

          {/* Buttons / links */}
          <div className="hero-cta" style={{ marginTop: 20, display: "flex", gap: 12, flexWrap: "wrap" }}>
            {/* <a href="#projects" className="btn" aria-label="View projects">View My Work</a> */}
            {/* <a href="mailto:rijitbanerjeejaduniv@gmail.com" className="btn" aria-label="Contact">Get In Touch</a> */}

            {/* ROUTER LINK to the hobbies page */}
            <Link to="/hobbies" className="btn" aria-label="My hobbies">My Hobbies</Link>
          </div>
        </div>
      </div>

      <a className="email-rail" href="mailto:rijitbanerjeejaduniv@gmail.com">
        rijitbanerjeejaduniv@gmail.com
      </a>
    </section>
  );
};

export default Hero;
