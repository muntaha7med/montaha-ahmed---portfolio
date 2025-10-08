import React from "react";
import { contact } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      {/* Header */}
      <div className="contact-header">
        <p className="section-subtitle">LET’S WORK TOGETHER!</p>
        <h2 className="section-title">Contact Me.</h2>
      </div>

      <div className="contact-container">
        {/* Left side: Info + socials */}
        <div className="contact-info">
          <p>
            I'm here to help! Whether you have questions, need support, or want to collaborate, feel free to reach out. Let's connect and make something great together!
          </p>

          <div className="socials">
            <a href={contact.email}>Email</a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={contact.kaggle} target="_blank" rel="noreferrer">Kaggle</a>
          </div>
        </div>

        {/* Right side: Form card */}
        <article className="contact-card">
          <h2 className="form-title">Any Projects?</h2>
          <form className="contact-form">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your name" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your email" />

            <label htmlFor="message">Message</label>
            <textarea id="message" rows="2" placeholder="Write your message..." />

            <button type="submit" className="btn-submit">
              Submit <span>🚀</span>
            </button>
          </form>
        </article>
      </div>
    </section>
  );
}
