import React from "react";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <section id="about"><About /></section>
        <section id="education"><Education /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="services"><Services /></section>
        <section id="contact"><Contact /></section>
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Montaha Ahmed Atef</p>
      </footer>
    </>
  );
}