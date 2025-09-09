import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Background from "./Background";

/**
 * src/components/Hobbies.js
 * Final corrected hobbies page with chess.com embed auto-resize listener.
 * Make sure your CSS contains the .hobbies-page / .hobbies-hero / .chess-embed rules
 * (from the CSS we discussed) so the layout looks right.
 */

export default function Hobbies() {
  // Listen for postMessage from Chess.com embed so we can auto-resize the iframe
  useEffect(() => {
    function onMessage(e) {
      try {
        const data = e?.data;
        if (!data || data.id !== "13830995") return;
        const iframe = document.getElementById("13830995");
        if (iframe && data.frameHeight) {
          // Add a small padding so the embedded controls aren't clipped
          iframe.style.height = `${data.frameHeight + 40}px`;
        }
      } catch (err) {
        // ignore unrelated/ malformed messages
      }
    }

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <main className="hobbies-page">
      <div className="container">
        <Background />
        <div className="hobbies-hero">
          <div className="hobbies-intro">
            <p className="muted-lead">Side projects & personal life</p>
            <h1 className="hobbies-title">Things I do outside work</h1>
            <p className="hobbies-tagline">
              Chess, tinkering with algorithms, cycling, and random experiments —
              I keep learning by playing, building, and reading.
            </p>


          </div>

          <div className="hobbies-visual">
            <div className="badge">R</div>
            <div className="hero-card">
              <h4>♟ Favorite hobby</h4>
              <p className="card-sub">Analyzing games & solving puzzles</p>
              <div className="small-meta">3 mins avg solve • blitz & classical</div>
            </div>
          </div>
        </div>

        {/* Hobbies grid */}
        <section className="hobbies-grid">
          <article className="hobby-card">
            <div className="hobby-icon">♟</div>
            <h3>Chess — my puzzle lab</h3>
            <p>
              I collect and study my best games. I am rated 1600 in Chess.Com & 2000 in Lichess. Send a challenge. Let's play a match.
            </p>
          </article>

          <article className="hobby-card">
            <div className="hobby-icon">📚</div>
            <h3>Reading</h3>
            <p>
              Pop-science, algorithms, and classic math books. Currently reading:
              <strong> How not to be Wrong</strong> by <strong>Jordan Ellenberg</strong>.
            </p>
          </article>

          <article className="hobby-card">
            <div className="hobby-icon">🚴</div>
            <h3>Stand-Up Comedy</h3>
            <p>
              I have always had a knack for public speaking. I write comedy sets on observational humour and perform in known settings.
            </p>
          </article>

          {/* <article className="hobby-card">
            <div className="hobby-icon">🛠️</div>
            <h3>Side projects</h3>
            <p>
              Tools, small experiments, and algorithmic puzzles. I like building
              things that help me learn something new.
            </p>
            <div className="card-foot">
              <a className="link-muted" href="/projects">See projects</a>
            </div>
          </article> */}
        </section>
        <h1 style={{ textAlign: "center" }}>One of my most memorable games.</h1>
        {/* Chess embed / replay */}
        <section className="chess-replay" aria-label="Chess replay">
          <div className="chess-embed-wrapper">
            <div className="chess-embed" role="region" aria-label="Chess.com embed">
              <iframe
                id="13830995"
                title="Chess.com Game"
                allowTransparency="true"
                frameBorder="0"
                src="https://www.chess.com/emboard?id=13830995"
              />
            </div>
          </div>
        </section>
        {/* Stand-up comedy video */}
        <h1 style={{ textAlign: "center" }}>A clip from my standup set at our college farewell party.</h1>
        <section className="standup-replay" aria-label="Stand-up comedy">
          <div className="video-wrapper">
            <video controls>
              <source src="/videos/standup.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
      </div>
      <div className="hobbies-ctas" style={{ display: "flex", justifyContent: "center" }}>
        <Link to="/" className="btn">Back to portfolio</Link>
      </div>

    </main>
  );
}
