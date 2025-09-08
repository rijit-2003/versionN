import React from "react";
import leetcodeLogo from "../images/leetcode.png";   // put logo in src/images
import codeforcesLogo from "../images/code-forces.png";
import codechefLogo from "../images/codechef.png";

const CompetitiveProgramming = () => {
  return (
    <section id="competitive" className="animate-on-scroll">
      <div className="container">
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            marginBottom: "3rem",
            color: "#64ffda",
          }}
        >
          Competitive Programming
        </h2>

        <div className="cp-grid">
          <a
            href="https://leetcode.com/u/rijitb/"
            target="_blank"
            rel="noopener noreferrer"
            className="cp-card"
          >
            <img src={leetcodeLogo} alt="LeetCode" className="cp-logo" />
            <span>LeetCode</span>
            <small className="cp-rating">Top 11% Worldwide</small>
          </a>

          <a
            href="https://codeforces.com/profile/rijitbanerjee08"
            target="_blank"
            rel="noopener noreferrer"
            className="cp-card"
          >
            <img src={codeforcesLogo} alt="Codeforces" className="cp-logo" />
            <span>Codeforces</span>
            <small className="cp-rating">⭐ Pupil at Codeforces</small>
          </a>

          <a
            href="https://www.codechef.com/users/napolean387"
            target="_blank"
            rel="noopener noreferrer"
            className="cp-card"
          >
            <img src={codechefLogo} alt="CodeChef" className="cp-logo" />
            <span>CodeChef</span>
            <small className="cp-rating">⭐ 3-Star Coder</small>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveProgramming;
