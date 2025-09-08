import React from "react";

export default function SocialIcons() {
  return (
    <div className="social-rail">
      <a className="social-icon" href="https://github.com/rijit-2003" aria-label="GitHub">
        <i className="fab fa-github" aria-hidden="true"></i>
      </a>

      <a className="social-icon" href="#" aria-label="Instagram">
        <i className="fab fa-instagram"></i>
      </a>

      <a className="social-icon" href="https://x.com/iamrijit" aria-label="Twitter">
        <i className="fab fa-twitter"></i>
      </a>

      <a className="social-icon" href="https://www.linkedin.com/in/rijit/" aria-label="LinkedIn">
        <i className="fab fa-linkedin"></i>
      </a>

      <div className="social-rail-line" />
    </div>
  );
}
