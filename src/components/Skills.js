import React from "react";

const SKILLS = [
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "Python", "Django", "REST APIs"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git & GitHub", "Docker", "Linux", "AWS Basics", "Heroku", "Render"],
  },
  {
    category: "Data Science",
    items: ["StreamLit", "Pandas", "Numpy", "DuckDB", "Machine Learning", "Statistics"],
  },
  {
    category: "Competitive Programming",
    items: ["LeetCode", "Codeforces", "CodeChef"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section animate-on-scroll">
      <div className="container">
        <h2 className="skills-heading">
          <span className="section-index">02.</span> Skills
        </h2>

        <div className="skills-grid">
          {SKILLS.map((s, i) => (
            <div className="skill-card" key={i}>
              <h3 className="skill-category">{s.category}</h3>
              <ul className="skill-list">
                {s.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
