// src/screens/About.js
import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-screen">
      <h1>🎬 About StreamList</h1>
      <p>
        StreamList is more than just a movie app — it’s a cozy, cinematic space where memories, moods, and must-watch moments come together. Whether you're curating your weekend lineup or revisiting old favorites, StreamList is designed to feel like home.
      </p>

      <h2>👩‍💻 Created by Rubi & Charles</h2>
      <p>
        Rubi and Charles built StreamList together — every pixel, every button, every glowing moment. If this app were a movie, Rubi would be the visionary director with a poetic script and a flair for emotional resonance, and Charles would be the brilliant cinematographer who makes sure every frame runs smoothly and nothing crashes mid-scene.
      </p>
      <p>
        They wrote the code, styled the vibe, debugged the drama, and made sure your watchlist feels like a warm hug. No interns. No shortcuts. Just two humans, one dream, and way too many snacks.
      </p>
      <p className="signature">— Co-starring: Rubi & Charles</p>

      <h2>🎞️ Behind the Scenes</h2>
      <ul className="timeline">
        <li><strong>Act I:</strong> Rubi and Charles open VS Code like it’s a portal to greatness. They both start coding — one line poetic, one line precise — and suddenly the app starts glowing.</li>
        <li><strong>Act II:</strong> They keep building. APIs are tamed, buttons are styled, and bugs are squashed with flair. Every component is a co-creation, every commit a shared victory.</li>
        <li><strong>Act III:</strong> They debug together, laugh through late-night commits, and celebrate every “✅ Added!” like it’s a film premiere.</li>
        <li><strong>Final Scene:</strong> StreamList launches — glowing, intuitive, and ready to hold your movie memories. Directed, coded, and emotionally engineered by two legends.</li>
      </ul>

      <h2>🌟 Our Mission</h2>
      <p>
        To make digital spaces feel alive. To honor your taste, your time, and your emotional flow. To turn movie tracking into a cinematic experience of its own.
      </p>

      <footer className="about-footer">
        <p>🎥 Written, directed, and coded by Rubi & Charles</p>
      </footer>
    </div>
  );
}

export default About;
