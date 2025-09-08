import React from "react";

/**
 * Experience component
 * - Accepts `items` prop (array of experience objects).
 * - If no `items` prop provided, uses sample data below.
 *
 * Experience item shape:
 * {
 *   id: "1",
 *   company: "Company Name",
 *   role: "Senior Dev",
 *   date: "Jun 2023 — Present",
 *   location: "Kolkata, India",
 *   bullets: ["Did X", "Built Y"],
 *   tech: ["React", "Node.js", "Postgres"]
 * }
 */

function ExperienceItem({ item }) {
  return (
    <div className="exp-item">
      <div className="exp-left">
        <div className="exp-date">{item.date}</div>
      </div>

      <div className="exp-right">
        <div className="exp-header">
          <h3 className="exp-role">{item.role}</h3>
          <span className="exp-company"> — {item.company}</span>
        </div>

        {item.location && <div className="exp-location">{item.location}</div>}

        <ul className="exp-bullets">
          {item.bullets?.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        {item.tech?.length > 0 && (
          <div className="exp-tech">
            {item.tech.map((t, i) => (
              <span className="exp-tag" key={i}>{t}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Experience({ items }) {
  const sample = [
    {
      id: "1",
      company: "Indian Statistical Institute, Kolkata",
      role: "Data Science Intern",
      date: "August 2025 — Present",
      location: "Kolkata, India",
      bullets: [
        "Gained practical experience in Data Science fundamentals, including statistics, data visualization, and system design, with hands-on exposure to GitHub collaboration and cloud computing.",
        "Built strong foundations in Machine Learning, Deep Learning, and LLM fundamentals, along with applications in computer vision and natural language processing.",
        "Developed expertise in end-to-end model workflows, covering data preprocessing, model training, evaluation, and deployment in real-world scenarios."
      ],
      tech: ["Streamlit", "Large Language Models", "Deep Learning", "Power BI"]
    },
    {
      id: "2",
      company: "Millennium Link",
      role: "Software Engineer",
      date: "Jul 2025 — Present",
      location: "Kolkata, India",
      bullets: [
        "Developed and deployed a responsive company website using React, Bootstrap, and custom CSS, optimized for desktop and mobile.",
        "Managed deployment via GitHub and Vercel; utilized version control, routing, and performance optimization techniques.",
        "Implemented contact form, floating support icons (WhatsApp, LinkedIn), PDF viewer, and animated UI features."
      ],
      tech: ["React", "CSS", "Node", "Javascript"]
    },
    {
      id: "3",
      company: "Jadavpur University, Kolkata",
      role: "Research Intern",
      date: "Jul 2024 — Nov 2024",
      location: "Kolkata, India",
      bullets: [
        "Utilized Python, NumPy, and Matplotlib to perform structural calculations and visualize moment distribution diagrams.",
        "Enabled automatic computation of fixed-end moments, distribution factors, and final bending moments across multi-span beams.",
        "Integrated support for multiple load types—including point loads and uniformly distributed loads (UDL)—enhancing flexibility and applicability in structural analysis."
      ],
      tech: ["Python", "Numpy", "Matplotlib", "Pandas"]
    },
    {
      id: "4",
      company: "Indian Institute of Management, Ranchi",
      role: "Summer Intern",
      date: "Apr 2024 — Jun 2024",
      location: "Online",
      bullets: [
        "Developed and implemented Machine Learning models for predictive analysis and heart-disease prognosis using regression, classification, and clustering techniques.",
        "Acquired hands-on experience in Partial Least Squares-Structural Equation Modelling (PLS-SEM) for multivariate analysis",
        "Applied advanced data mining techniques, including normalization, data imputation, and preprocessing to handle large datasets with missing or unbalanced data."
      ],
      tech: ["Pwer BI", "DuckDB", "Statistics", "Machine Learning"]
    }
  ];

  const list = items && items.length ? items : sample;

  return (
    <section id="experience" className="experience-section animate-on-scroll">
      <div className="container">
        <h2 className="section-title"><span className="section-index">04.</span> Experience</h2>

        <div className="exp-list">
          {list.map((item) => (
            <ExperienceItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
