import React, { useState } from "react";
import { services } from "../data";

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-header">
        <p className="section-subtitle">services</p>
        <h2 className="section-title">My Services</h2>
        <p className="section-brief">
          I don’t just work with data — I humanise it. Whether it’s cleaning messy datasets,
          uncovering hidden patterns, or turning numbers into clear dashboards and predictive models,
          my services transform raw information into stories that drive clarity, impact, and smarter decisions.
        </p>
      </div>

      <div className="services-grid">
        {services.map((s) => (
          <ServiceCard key={s.title} service={s} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleTier = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <article className="service-card">
      <h3 className="service-title">{service.title}</h3>
      <p className="service-desc">{service.desc}</p>

      <div className="service-tiers">
        {service.tiers.map((t, i) => (
          <div key={i} className="service-tier">
            <button 
              className="tier-toggle" 
              onClick={() => toggleTier(i)}
            >
              <span className="toggle-icon">
                {openIndex === i ? "−" : "+"}
              </span>
              {t.level}
            </button>
            {openIndex === i && (
              <p className="tier-details">{t.details}</p>
            )}
          </div>
        ))}
      </div>

      <a href="#contact" className="btn service-btn">Get Started 🚀</a>
    </article>
  );
}