import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience"; 
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Background from "./components/Background";
import CompetitiveProgramming from "./components/CompetitiveProgramming";
import Education from "./components/Education";

function App() {
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
      <Skills/>
      <Education/>
      <Experience/>
      <Projects />
      <CompetitiveProgramming/>
      <Contact />
    </>
  );
}

export default App;
