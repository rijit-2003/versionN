import React from "react";

export default function Education() {
  const edu = [
    {
      id: 1,
      degree: "Bachelor of Engineering (BE), Civil Engineering",
      institution: "Jadavpur University",
      location: "Kolkata, India",
      date: "2021 — 2025",
      details: ["GPA - 3.1/5"],
      icon: "🎓",
    },
    {
      id: 2,
      degree: "Higher Secondary (12th Grade)",
      institution: "Nava Nalanda High School",
      location: "Kolkata, India",
      date: "2019 — 2021",
      details: ["GPA - 4.8/5"],
      icon: "🏫",
    },
    {
      id: 2,
      degree: "Secondary (10th Grade)",
      institution: "Nava Nalanda High School",
      location: "Kolkata, India",
      date: "2018 — 2020",
      details: ["GPA - 4.6/5"],
      icon: "🏫",
    },
  ];

  return (
    <section id="education" className="education-section animate-on-scroll">
      <div className="container">
        <h2 className="section-title">
          <span className="section-index">03.</span> Education
        </h2>

        <div className="edu-timeline">
          {edu.map((item) => (
            <div className="edu-node" key={item.id}>
              <div className="edu-dot">{item.icon}</div>
              <h3 className="edu-degree">{item.degree}</h3>
              <div className="edu-institution">{item.institution}</div>
              <div className="edu-location">{item.location}</div>
              <div className="edu-date">{item.date}</div>
              <ul className="edu-details">
                {item.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
