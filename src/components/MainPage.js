import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience"; 
import Projects from "./Projects";
import Contact from "./Contact";
import Background from "./Background";
import CompetitiveProgramming from "./CompetitiveProgramming";
import Education from "./Education";

export default function MainPage() {
  // Scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });
  }, []);

  return (
    <>
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <CompetitiveProgramming />
      <Contact />
    </>
  );
}
