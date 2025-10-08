import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <p className="section-subtitle">My Work</p>
      <h2 className="section-title">Projects.</h2>

      {/* New descriptive paragraph */}
      <p className="section-brief">
        As part of my learning journey in Data Science, I have undertaken several
        hands-on projects where I applied the skills I acquired. From data preprocessing
        and exploratory data analysis (EDA) to developing predictive models and
        visualisations, these projects have enabled me to strengthen my knowledge and
        gain practical experience. Below are some of the projects I have implemented.
      </p>

      <div className="projects-list">
        {projects.map((p) => (
          <div key={p.title} className="project-item">
            {/* Left side: Info */}
            <div className="project-info">
              <p className="project-title">{p.title}</p>
              <p className="project-desc">{p.desc}</p>

              <div className="project-tags">
                {p.tags.map((t) => (
                  <span className="pill" key={t}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {p.link && (
                  <a
                    className="btn"
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project
                  </a>
                )}
                {p.source && (
                  <a
                    className="btn"
                    href={p.source}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source Code
                  </a>
                )}
                {p.dataset && (
                  <a
                    className="btn"
                    href={p.dataset}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Dataset
                  </a>
                )}
              </div>
            </div>

            {/* Right side: Image */}
            {p.image && (
              <div className="project-image">
                <img src={p.image} alt={p.title} />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="all-projects">
        <a
          className="btn"
          href="https://github.com/yourusername"
          target="_blank"
          rel="noreferrer"
        >
          All Projects
        </a>
      </div>
    </section>
  );
}
