import React from "react";
import { about } from "../data";
import profilePic from "../assets/MontahaA7med.png";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* Section Title */}
        <div className="about-header">
          <h3 className="section-subtitle">Introduction</h3>
          <h2 className="section-title">Overview.</h2>
        </div>
        
        {/* Left side: Image + basic info */}
        <div className="about-left">
          <img src={profilePic} alt="Montaha Ahmed Atef" className="about-img" />
          <h3 className="about-name">{about.name}</h3>
          <a href={about.cv} target="_blank" rel="noreferrer" className="btn">
            View My CV
          </a>
        </div>

        {/* Right side: Details */}
        <div className="about-right">
          <h3 className="heading">About me</h3>
          <p className="intro">{about.intro}</p>
          <p className="body">{about.body}</p>

          <div className="skills">
            {about.skills.map((s) => (
              <span className="pill" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}