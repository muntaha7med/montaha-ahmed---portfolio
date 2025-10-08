import React from "react";
import { hero } from "../data";
// 1. IMPORT the image file
import profilePicture from "../assets/ProfilePic.png"; 

export default function Header() {
  return (
    <header className="hero">
      {/* 1. Portfolio Picture */}
      <div className="portfolio-picture">
        <img 
          src={profilePicture} // Use the imported variable here
          alt={`${hero.name}'s professional profile picture`} // IMPORTANT for accessibility
        />
      </div>


      {/* 2. Main Bio/Text Block */}
      <div className="hero-content">
        <h1 className="title">{hero.name}</h1>
        <p className="subtitle">{hero.role}</p>
        {/* Optional: Use a span for the badge if it's small, or a div if it's a block */}
        <span className="badge">Former Backend Developer</span> 
        <p className="tagline">{hero.tagline}</p>
      </div>
    </header>
  );
}