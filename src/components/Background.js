import React, { useEffect } from "react";

const Background = () => {
  useEffect(() => {
    function createParticle() {
      const particle = document.createElement("div");
      particle.style.cssText = `
        position: fixed;
        width: 2px;
        height: 2px;
        background: #64ffda;
        pointer-events: none;
        z-index: -1;
        opacity: 0.5;
        left: ${Math.random() * 100}vw;
        top: 100vh;
        animation: float ${Math.random() * 3 + 2}s linear infinite;
      `;
      document.body.appendChild(particle);
      setTimeout(() => particle.remove(), 5000);
    }

    const style = document.createElement("style");
    style.textContent = `
      @keyframes float {
        to { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
      }
    `;
    document.head.appendChild(style);

    const interval = setInterval(createParticle, 200);
    return () => clearInterval(interval);
  }, []);

  return <div className="bg-animation"></div>;
};

export default Background;
