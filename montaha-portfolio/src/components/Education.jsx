import React from "react";
import { education } from "../data";

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="education-container">

        {/* Section Title */}
        <div className="education-header">
          <h2 className="section-title">Educational.</h2>
          <h3 className="section-subtitle">Background</h3>
        </div>

        {/* Main Content */}
        <div className="education-container">
          {/* Left side: Year block */}
          <div className="education-left">
            <h2 className="education-years">2022 – 2026</h2>
          </div>

          {/* Right side: Details */}
          <div className="education-right">
            {education.map((e) => (
              <article className="education-item" key={e.title}>
                {/* University Logo */}
                <img
                  src={e.image}
                  alt={`${e.org} logo`}
                  className="edu-logo"
                />

                {/* Education Text */}
                <div className="edu-info">
                  <h3 className="edu-title">{e.title}</h3>
                  <div className="edu-meta">
                    <span className="pill">{e.period}</span>
                    <span>•</span>
                    <span>{e.org}</span>
                  </div>
                  <p className="edu-desc">{e.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}