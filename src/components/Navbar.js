import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <a href="#home" className="logo">RB</a>

        <div className="nav-right">
          <ul className="nav-links">
            <li><a href="#about"><span className="nav-index">01.</span> About</a></li>
            <li><a href="#skills"><span className="nav-index">02.</span> Skills</a></li>
            <li><a href="#education"><span className="nav-index">03.</span> Education</a></li>
            <li><a href="#experience"><span className="nav-index">04.</span> Experience</a></li>
            <li><a href="#projects"><span className="nav-index">05.</span> Work</a></li>
            <li><a href="#contact"><span className="nav-index">06.</span> Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
