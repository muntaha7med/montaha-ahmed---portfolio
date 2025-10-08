// src/components/ProfilePicture.jsx
import React from "react";
import profilePicture from "../assets/ProfilePic.png";
import { hero } from "../data";

export default function ProfilePicture() {
  return (
    <div className="portfolio-picture">
      <img
        src={profilePicture}
        alt={`${hero.name}'s professional profile picture`}
      />
    </div>
  );
}