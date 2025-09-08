import React from "react";
import SocialIcons from "./SocialIcons";

const Hero = () => {
  return (
    <section id="home" className="hero hero-modern">
      <SocialIcons />

      <div className="container hero-inner">
        <div className="intro">
          <h5 className="lead">Hi, my name is</h5>
          <h1 className="big-name">
            Rijit Banerjee.
          </h1>

          <h2 className="big-sub">I am a <u>Pro</u>grammer.</h2>

          <p className="hero-blurb">
            I am a technologist passionate about algorithms, systems, and interdisciplinary science, driven to create innovative solutions that connect ideas across technology, business, and research.
          </p>
        </div>
      </div>

      <a className="email-rail" href="mailto:rijitbanerjeejaduniv@gmail.com">rijitbanerjeejaduniv@gmail.com</a>
    </section>
  );
};

export default Hero;
