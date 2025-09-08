import React from "react";

const PROJECTS = [
  {
    id: 1,
    title: "Cosmic Distance Ladder",
    featured: true,
    description:
      "An interactive, gamified journey through the history of astronomy where users rediscover milestones by solving problems, tracing humanity’s steps in measuring the universe.",
    tech: ["React", "CSS", "Flask", "Python", "Bootstrap", "Javascript"],
    github: "https://github.com/rijit-2003/cdl",
    demo: "https://cdl-front.onrender.com/",
    // image: "/images/ecomm.png",
  },
  {
    id: 2,
    title: "Ecommerce Website",
    description:
      "Mobile-first e-commerce platform with payment integration, inventory management, and admin dashboard.",
    tech: ["React.js", "Stripe", "MongoDB", "Express", "Node", "Redux"],
    github: "https://github.com/rijit-2003/ecommerce",
    demo: "https://rijit-2003.github.io/ecommerce/",
    // image: "/images/cdl.png",
  },
  {
    id: 3,
    title: "Movie Website",
    description:
      "A movie discovery platform integrated with IMDb APIs, enabling users to explore, search, and manage films with real-time data and an intuitive interface.",
    tech: ["React.js", "MongoDB", "Express", "Node", "IMDB API"],
    github: "https://github.com/rijit-2003/movie_website",
    demo: "https://movie-website-seven-eta.vercel.app/",
    // image: "/images/cdl.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section animate-on-scroll">
      <div className="container">
        <h2 className="projects-heading">
          <span className="section-index">05.</span> Work
        </h2>

        <div className="projects-list">
          {PROJECTS.map((p, i) => (
            <div
              key={p.id}
              className={`project-item ${i % 2 === 0 ? "normal" : "reverse"}`}
            >
              {/* Left: content */}
              <div className="project-content">
                <p className="project-label">Featured Project</p>
                <h3 className="project-title">{p.title}</h3>
                <div className="project-desc-box">
                  <p>{p.description}</p>
                </div>
                <ul className="project-tech">
                  {p.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a href={p.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="demo"
                  >
                    Live Demo
                  </a>
                </div>
              </div>

              {/* Right: image */}
              {/* <div className="project-image">
                <img src={p.image} alt={p.title} />
                <div className="overlay"></div>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
