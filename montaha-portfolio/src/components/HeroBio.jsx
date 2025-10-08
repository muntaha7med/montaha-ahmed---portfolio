// src/components/HeroBio.jsx
import React from "react";
import { hero } from "../data";

export default function HeroBio() {
  return (
    <div className="hero-content">
      <h1 className="title">{hero.name}</h1>
      <p className="subtitle">{hero.role}</p>
      <span className="badge">Former Backend Developer</span>
      <p className="tagline">{hero.tagline}</p>
    </div>
  );
}