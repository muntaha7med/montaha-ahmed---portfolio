import React from "react";
import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">

        {/* Section Title */}
        <div className="experience-header">
          <h3 className="section-subtitle">My Journey</h3>
          <h2 className="section-title">Work Experience.</h2>
        </div>

        {/* Left side: Intro */}
        <div className="experience-left">
          <p className="experience-intro">
            My journey in AI and Data Science has been shaped by a mix of structured programmes, internships, and hands-on projects. Through these experiences, I have applied concepts such as data preprocessing, exploratory analysis, machine learning, and visualisation to practical challenges. Each opportunity allowed me to sharpen my technical foundation, enhance problem-solving skills, and collaborate effectively — building a professional mindset that I continue to grow with every project.
          </p>
          <a
            href="https://drive.google.com/file/d/1UraZMZI3XKg-FDsJQqZmz_kxysoifA4r/view?usp=sharing"
            download
            className="btn"
          >
            Download My CV
          </a>
        </div>

        {/* Right side: Timeline */}
        <div className="experience-right">
          {experience.map((job) => (
            <article className="experience-item" key={job.role + job.org}>
              {/* Date header */}
              <h4 className="experience-year">{job.year}</h4>

              <div className="experience-content">
                {/* Image */}
                <img
                  src={job.image}
                  alt={job.org}
                  className="experience-img"
                />

                {/* Text */}
                <div>
                  <h3 className="experience-role">{job.role}</h3>
                  <p className="experience-desc">{job.desc}</p>

                  {/* Period + Org */}
                  <div className="experience-meta">
                    <span className="pill">{job.period}</span>
                    <span>•</span>
                    <span>{job.org}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}