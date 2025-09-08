import React from "react";

/**
 * Props:
 *  - role (string)
 *  - company (string)
 *  - range (string) e.g. "Jul 2023 — Present"
 *  - location (string)
 *  - bullets (array of strings)
 */
export default function ExperienceItem({ role, company, range, location, bullets }) {
  return (
    <article className="exp-item">
      <div className="exp-left">
        <div className="exp-range">{range}</div>
      </div>

      <div className="exp-right">
        <h3 className="exp-role">
          {role} <span className="exp-company">@ {company}</span>
        </h3>

        <div className="exp-meta">{location}</div>

        <ul className="exp-bullets">
          {bullets && bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
